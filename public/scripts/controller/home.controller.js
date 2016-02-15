/**
 * Created by kaufi on 06.02.2016.
 */
(function (angular) {

    'use strict';

    angular.module('darts-training-app')
        .controller('HomeController', function ($scope, $log, $location) {

            $scope.path = $location.path();

            $scope.redirect = function() {
                $location.path('#/selectGame');
            }

        });
}(window.angular));
