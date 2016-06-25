<?php


class live_notification_admin_page {

    function register_menu() {
        add_menu_page( 'Live Notification', 'Live Notification', 'manage_options', 'live-notify', array( $this, 'admin_page' ) );
    }

    function admin_page() {

        echo
            '<div class="container app-container" ng-app="live-notify-app">
                <div class="row">
                    <div class="col-sm-12">
                        <h2>Live Notify</h2>
                    </div>
                </div>
                <div id="admin-js-app" class="row app-template-wrapper">
                    <notify-admin></notify-admin>
                </div>
            </div>';

    }

}

?>