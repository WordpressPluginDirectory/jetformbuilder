<?php


namespace Jet_Form_Builder;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Generators\Get_From_DB;
use Jet_Form_Builder\Generators\Num_Range;
use Jet_Form_Builder\Generators\Num_Range_Manual;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

class Form_Manager {

	public $generators = false;
	public $builder;

	const  NAMESPACE_FIELDS = 'jet-forms/';

	/**
	 * Returns all instances of options generators classes
	 *
	 * @return [type] [description]
	 */
	public function get_options_generators() {

		if ( false === $this->generators ) {

			$instances = apply_filters(
				'jet-form-builder/forms/options-generators',
				array(
					new Num_Range(),
					new Num_Range_Manual(),
					new Get_From_DB(),
				),
				$this
			);

			$this->generators = array();

			foreach ( $instances as $instance ) {
				if ( $instance->can_generate() ) {
					$this->generators[ $instance->get_id() ] = $instance;
				}
			}
		}

		return $this->generators;
	}


	/**
	 * Returns generators list
	 *
	 * @return [type] [description]
	 */
	public function get_generators_list() {

		$generators = $this->get_options_generators();
		$result     = array(
			0 => __( 'Select function...', 'jet-form-builder' ),
		);

		foreach ( $generators as $id => $generator ) {
			$result[ $id ] = $generator->get_name();
		}

		return $result;
	}

	public function get_only_form_fields( $form_id ): array {
		$content = Block_Helper::get_blocks_by_post( $form_id );

		return Block_Helper::filter_blocks_by_namespace( $content );
	}

	public function get_field_by_name( $form_id, $field_name, $blocks = array() ): array {
		if ( ! $blocks ) {
			$blocks = Block_Helper::get_blocks_by_post( $form_id );
		}

		return Block_Helper::find_block_by_name( $field_name, $blocks );
	}

}
