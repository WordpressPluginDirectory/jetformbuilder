<?php


namespace JFB_Modules\Form_Record\Admin\Table_Views;

use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use JFB_Modules\Form_Record\Admin\View_Columns\Classes_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\Header_Actions_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\Primary_Form_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\Referrer_Link_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\Row_Actions_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\Status_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\User_Login_Column;
use JFB_Modules\Form_Record\Models;
use JFB_Modules\Form_Record\Query_Views\Record_View;
use JFB_Modules\Form_Record\Query_Views\Record_View_Count;
use Jet_Form_Builder\Admin\Table_Views\Column_Base;
use Jet_Form_Builder\Admin\Table_Views\Columns\Created_At_Column;
use Jet_Form_Builder\Admin\Table_Views\Columns\Record_Id_Column_Advanced;
use Jet_Form_Builder\Admin\Table_Views\View_Advanced_Base;
use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use JFB_Modules\Rest_Api\Endpoints\Get_Form_Fields;
use JFB_Modules\Form_Record\Rest_Endpoints;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Records_Table_View extends View_Advanced_Base {

	public function get_columns(): array {
		return array(
			Column_Base::CHOOSE  => new Record_Id_Column_Advanced(),
			Column_Base::ACTIONS => new Row_Actions_Column(),
			Column_Base::CLASSES => new Classes_Column(),
			'form'               => new Primary_Form_Column(),
			'referrer'           => new Referrer_Link_Column(),
			'status'             => new Status_Column(),
			'user'               => new User_Login_Column(),
			'created_at'         => new Created_At_Column(),
		);
	}

	/**
	 * @return Base_Db_Model[]
	 */
	public function get_dependencies(): array {
		return array(
			new Models\Record_Action_Result_Model(),
			new Models\Record_Error_Model(),
			new Models\Record_Field_Model(),
		);
	}

	public function get_raw_list( array $args ): array {
		try {
			return ( new Record_View() )
				->set_table_args( $args )
				->query()
				->query_all();
		} catch ( Query_Builder_Exception $exception ) {
			return array();
		}
	}

	public function get_prepared_list( array $custom_list = array() ): array {
		return apply_filters(
			'jet-form-builder/form-record/list',
			$this->prepare_list( $custom_list )
		);
	}

	public function get_global_actions(): array {
		return ( new Header_Actions_Column() )->get_value();
	}

	public function get_receive_endpoint(): array {
		return array(
			'url'     => Rest_Endpoints\Fetch_Records_Page_Endpoint::rest_url(),
			'methods' => Rest_Endpoints\Fetch_Records_Page_Endpoint::get_methods(),
		);
	}

	public function get_total(): int {
		return Record_View_Count::count();
	}

	public function get_empty_message(): string {
		$link = "<a href='https://youtu.be/FwfOTi5J1T4' target='_blank'>https://youtu.be/FwfOTi5J1T4</a>";

		return sprintf(
		/* translators: %s - link to the YouTube video */
			__(
				'No found items. To save a form record, add the 
		Save Form Record action to the desired form. 
		More detailed information in the video - %s',
				'jet-form-builder'
			),
			$link
		);
	}

	/**
	 * @return array
	 */
	public function load_data(): array {
		return array(
			'filters_endpoint'     => array(
				'methods' => Rest_Endpoints\Fetch_Filters_Endpoint::get_methods(),
				'url'     => Rest_Endpoints\Fetch_Filters_Endpoint::rest_url(),
			),
			'load_fields_endpoint' => Get_Form_Fields::get_endpoint(),
			'counter_endpoint'     => Rest_Endpoints\Fetch_Records_Count_Endpoint::get_endpoint(),
			'export_url'           => Pages_Manager::instance()->get_action_url( 'records-export' ),
			'messages'             => array(
				'filter_form'       => __( 'Select Form', 'jet-form-builder' ),
				'filter_form_title' => __( 'All Forms', 'jet-form-builder' ),
				'filter_date'       => __( 'All time', 'jet-form-builder' ),
				'empty_checked'     => __( 'You have not selected any record.', 'jet-form-builder' ),
				'empty_action'      => __( 'You have not selected an action.', 'jet-form-builder' ),
			),
		);
	}
}
