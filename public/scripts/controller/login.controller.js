/**
 * Created by kaufi on 06.02.2016.
 */
(function (angular) {

    'use strict';

    angular.module('darts-training-app')
        .controller('LoginController', function ($scope, $log, $location, $rootScope, dataService) {

            $scope.path = '/login';

            $scope.tempUser = {
                user: null,
                password: null
            };

            $scope.loginError = false;
            $scope.redirect = function (location) {
                $location.path(location);
            };
            $scope.login = function () {
                dataService.performLogin($scope.tempUser).then(function(loginError) {
                    if (loginError) {
                        $scope.loginError = loginError;
                    } else {
                        $rootScope.user = $scope.tempUser;
                        $location.path('/');
                    }
                });
            };
        });
}(window.angular));
