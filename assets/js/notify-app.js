var live_notify_app = live_notify_app || {};

(function($){

    live_notify_app.app = (function( notification ){

        notification.app = angular.module( 'live-notify-app', ['ngResource'] );

        notification.app.directive('notifyAdmin', function(){
           return{
               restrict: 'E',
               templateUrl: notify_local.template_directory + '/admin.html',
               controller: ['$scope', function( $scope ) {

                   $scope.notify = {
                       active: '0'
                   }


               }]
           }
        });

        notification.app.directive('notifyFed', function(){
            return{
                restrict: 'E',
                templateUrl: notify_local.template_directory + '/fed.html',
                controller: ['$scope', function( $scope ){
                    console.log('here');
                }]
            }
        });

        return notification;
    }(live_notify_app.app || {}))

}(jQuery));

