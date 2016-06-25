var live_notify_app = live_notify_app || {};

(function($){

    live_notify_app.app = (function( notification ){

        notification.app = angular.module( 'live-notify-app', ['ngResource', 'firebase'] );

        notification.app.directive('notifyAdmin', function(){
           return{
               restrict: 'E',
               templateUrl: notify_local.template_directory + '/admin.html',
               controller: ['$scope', '$firebaseObject', '$timeout', function( $scope, $firebaseObject, $timeout ) {

                   $scope.notify = {
                       active: '0'
                   };
                   $scope.save_notify = false;

                   var ref = new Firebase('https://cc-notifications.firebaseio.com'),
                       syncObject = $firebaseObject( ref );
                   syncObject.$bindTo( $scope, 'notify' );


                   $scope.updateNotification = function() {
                       console.log('updating...');
                       $scope.save_notify = true;

                       $timeout(function(){
                           $scope.save_notify = false;
                       }, 500)

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

