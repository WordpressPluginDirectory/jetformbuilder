<?php


namespace JFB_Modules\Webhook;

use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers\Base_Meta_Container;
use Jet_Form_Builder\Db_Queries\Query_Conditions_Builder;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_It;
use JFB_Modules\Logger\Empty_Logger;
use JFB_Modules\Logger\Interfaces\Logger_It;
use JFB_Modules\Webhook\Db\Models\Tokens_Model;
use JFB_Modules\Webhook\Db\Views\Tokens_View;
use JFB_Modules\Security;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements Base_Module_It, Base_Module_After_Install_It {

	const GET_TOKEN_ID = 'jfb_token_id';
	const GET_TOKEN    = 'jfb_token';

	/**
	 * @var Logger_It
	 */
	private $logger;

	private $verified  = false;

	/**
	 * Has value while webhook is processed
	 *
	 * @var string
	 */
	private $token      = '';
	private $token_id   = 0;
	private $check_hash = true;

	public function rep_item_id() {
		return 'webhook';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		if ( $this->is_webhook_request() ) {
			add_action( 'parse_request', array( $this, 'try_to_catch' ) );
		}
	}

	public function remove_hooks() {
		if ( $this->is_webhook_request() ) {
			remove_action( 'parse_request', array( $this, 'try_to_catch' ) );
		}
	}

	public function on_install() {
		$this->set_logger( new Empty_Logger() );
	}

	public function on_uninstall() {
	}

	public function try_to_catch() {
		// phpcs:disable WordPress.Security.NonceVerification.Recommended
		$this->set_token_id( absint( $_GET[ self::GET_TOKEN_ID ] ?? '' ) );
		$this->set_token( sanitize_key( $_GET[ self::GET_TOKEN ] ?? '' ) );
		// phpcs:enable WordPress.Security.NonceVerification.Recommended

		$this->confirm();
	}

	public function confirm() {
		global $wpdb;

		// reset for case, where multiple webhooks could be triggered
		$this->verified = false;

		$view = new Tokens_View();

		$expire_conditions = new Query_Conditions_Builder();
		$expire_conditions->set_relation_or();
		$expire_conditions->set_condition(
			array(
				'type'   => Query_Conditions_Builder::TYPE_MORE_STATIC,
				'values' => array( 'expire_at', current_time( 'mysql', true ) ),
			)
		);
		$expire_conditions->set_condition(
			array(
				'type'   => Query_Conditions_Builder::TYPE_IS_NULL,
				'values' => array( 'expire_at' ),
			)
		);

		$conditions = array(
			array(
				'type'   => Query_Conditions_Builder::TYPE_EQUAL,
				'values' => array( 'id', $this->get_token_id() ),
			),
			$expire_conditions,
		);

		try {
			$token_row = $view::findOne( $conditions )->query()->query_one();
		} catch ( Query_Builder_Exception $exception ) {
			$this->logger->log(
				$exception->getMessage(),
				$conditions
			);

			return;
		}

		$table  = Tokens_Model::table();
		$action = $token_row['action'];

		if ( $this->is_check_hash() &&
			! Security\Module::get_hasher()->CheckPassword(
				$this->token,
				$token_row['hash']
			)
		) {
			$this->logger->log(
				sprintf(
				/* translators: %d - primary id of token row */
					__( 'Invalid token for %d (primary ID) row', 'jet-form-builder' ),
					$this->get_token_id()
				)
			);
			do_action( "jet-form-builder/webhook/{$action}", $this );

			return;
		}

		// custom query to prevent race-condition
		// phpcs:disabled WordPress.DB
		$wpdb->query(
			$wpdb->prepare(
				"UPDATE {$table} SET
{$table}.exec_count = {$table}.exec_count + 1,
{$table}.updated_at = %s
WHERE 1=1
AND {$table}.exec_count < {$table}.limit_exec
AND {$table}.id = %d
;
",
				current_time( 'mysql', 1 ),
				$this->get_token_id()
			)
		);
		// phpcs:enabled WordPress.DB

		if ( ! $wpdb->rows_affected ) {
			$this->logger->log(
				sprintf(
				/* translators: %d - primary id of token row */
					__( 'Failed to increment `exec_count` column in %d (primary ID) row', 'jet-form-builder' ),
					$this->get_token_id()
				)
			);
			do_action( "jet-form-builder/webhook/{$action}", $this );

			return;
		}

		$this->logger->log(
			sprintf(
			/* translators: %d - primary id of token row */
				__( 'Successfully verified webhook (primary ID -> %d)', 'jet-form-builder' ),
				$this->get_token_id()
			),
			sprintf( 'hook: jet-form-builder/webhook/%s', $action )
		);

		$this->verified = true;

		do_action( "jet-form-builder/webhook/{$action}", $this );
	}

	public function redirect( string $url ) {
		// make sure we don't have such parameters
		$url = remove_query_arg( self::GET_TOKEN_ID, $url );
		$url = remove_query_arg( self::GET_TOKEN, $url );

		// phpcs:ignore WordPress.Security.SafeRedirect.wp_redirect_wp_redirect
		wp_redirect( $url );
		die;
	}

	public function set_logger( Logger_It $logger ) {
		$this->logger = $logger;
	}

	/**
	 * @return Logger_It
	 */
	public function get_logger(): Logger_It {
		return $this->logger;
	}

	/**
	 * @return bool
	 */
	public function is_webhook_request(): bool {
		// phpcs:disable WordPress.Security.NonceVerification.Recommended
		return (
			array_key_exists( self::GET_TOKEN_ID, $_GET ) &&
			array_key_exists( self::GET_TOKEN, $_GET ) &&
			is_numeric( $_GET[ self::GET_TOKEN_ID ] )
		);
		// phpcs:enable WordPress.Security.NonceVerification.Recommended
	}

	/**
	 * @return bool
	 */
	public function is_verified(): bool {
		return $this->verified;
	}

	/**
	 * @return int
	 */
	public function get_token_id(): int {
		return $this->token_id;
	}

	/**
	 * @param int $token_id
	 */
	public function set_token_id( int $token_id ) {
		$this->token_id = $token_id;
	}

	/**
	 * @return string
	 */
	public function get_token(): string {
		return $this->token;
	}

	/**
	 * @param string $token
	 */
	public function set_token( string $token ) {
		$this->token = $token;
	}

	/**
	 * @param bool $check_hash
	 */
	public function set_check_hash( bool $check_hash ) {
		$this->check_hash = $check_hash;
	}

	/**
	 * @return bool
	 */
	public function is_check_hash(): bool {
		return $this->check_hash;
	}
}
