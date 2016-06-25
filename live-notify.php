<?php
/**
 * Plugin Name: Live Notification System
 * Description: Notify users of your website, live
 * Author: Roy Sivan
 * Author URI: http://www.roysivan.com
 * Version: 0.1
 * License: GPL3+
 * Text Domain: live-notify
 */

define( 'LIVE_NOTIFY_DIR', plugin_dir_path( __FILE__ ) );
define( 'LIVE_NOTIFY_URL', plugin_dir_url( __FILE__ ) );
define( 'LIVE_NOTIFY_VERSION', '0.1' );



require_once 'includes/admin_menu.php';
require_once 'includes/admin_js.php';

class live_notify {

    function admin_menu() {
        $menu = new live_notification_admin_page();
        $menu->register_menu();
    }

    function admin_scripts( $hook ) {
        if( $hook !== 'toplevel_page_live-notify' )
            return;
        $scripts = new live_notify_scripts();
        $scripts->load_scripts();
    }


}

$notify_app = new live_notify();


/*
 * ADMIN PAGE: Register and Create the Admin Page
 */
add_action( 'admin_menu', array( $notify_app, 'admin_menu' ) );

/*
 * ADMIN APP: Enqueue JavaScript for application
 */
add_action( 'admin_enqueue_scripts', array( $notify_app, 'admin_scripts' ) );



?>