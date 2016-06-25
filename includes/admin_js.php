<?php

class live_notify_scripts {

    function load_scripts() {
        wp_enqueue_script( 'notify-scripts', LIVE_NOTIFY_URL . 'build/js/live-notify-scripts.js', array( 'jquery' ), LIVE_NOTIFY_VERSION, false );
        wp_enqueue_style( 'notify-styles', LIVE_NOTIFY_URL . 'build/css/styles.css', array(), LIVE_NOTIFY_VERSION, 'all' );

        wp_localize_script( 'notify-scripts', 'notify_local',
            array(
                'api_url' => get_rest_url(),
                'template_directory' => LIVE_NOTIFY_URL . 'templates',
                'nonce' => wp_create_nonce( 'wp_rest' ),
            )
        );
    }

}