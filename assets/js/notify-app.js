var live_notify_app = live_notify_app || {};

(function($){

    live_notify_app.app = (function( notification ){

        notification.app = angular.module( 'live-notify-app', ['ngResource', 'firebase'] );
        notification.firebase_url = 'https://cc-notifications.firebaseio.com';

        notification.app.directive('notifyAdmin', function(){
           return{
               restrict: 'E',
               templateUrl: notify_local.template_directory + '/admin.html',
               controller: ['$scope', '$firebaseObject', '$timeout', function( $scope, $firebaseObject, $timeout ) {

                   $scope.save_notify = false;

                   var ref = new Firebase( notification.firebase_url );
                   $scope.notify = $firebaseObject( ref );


                   $scope.updateNotification = function() {
                       console.log('updating...');
                       $scope.notify.$save($scope.notify);
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
                controller: ['$scope', '$firebaseObject', '$timeout', function( $scope, $firebaseObject, $timeout ) {
                    $scope.notify = {};

                    var ref = new Firebase( notification.firebase_url ),
                        syncObject = $firebaseObject( ref );
                    syncObject.$bindTo($scope, 'notify');
                    

                }]
            }
        });

        return notification;
    }(live_notify_app.app || {}))

}(jQuery));

