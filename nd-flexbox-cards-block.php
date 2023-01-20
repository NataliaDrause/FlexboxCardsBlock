<?php

/**
 * Plugin Name:       Flexbox Cards Block
 * Plugin URI:        https://nataliadrause.com/
 * Description:       Flexbox Cards Block to display featured content.
 * Version:           1.0.0
 * Requires at least: 6.1
 * Requires PHP:      7.2
 * Author:            Natalia Drause
 * Author URI:        https://nataliadrause.com/
 * License:           GPL v3 or later
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 */

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

class NDFlexboxCardsBlock {

  function __construct() {

    // 1. Enqueue admin assets in the backend
    add_action('init', array($this, 'admin_assets'));

  }

  // 1. Enqueue admin assets in the backend
  function admin_assets() {
    wp_register_script('nd-flexbox-card-block', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-i18n', 'wp-editor'), true, false);
    register_block_type('nd-plugins/nd-flexbox-cards-block', array(
      'editor_script' => 'nd-flexbox-card-block',
      'render_callback' => array($this, 'the_html'),
    ));
  }

  function the_html($attributes) {
    ob_start(); ?>
    <h3>Output</h3>
    <?php
    return ob_get_clean();
  }

}

$ndFlexboxCardsBlock = new NDFlexboxCardsBlock();