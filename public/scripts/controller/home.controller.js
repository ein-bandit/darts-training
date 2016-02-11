/**
 * Created by kaufi on 06.02.2016.
 */
(function (angular) {

    'use strict';

    angular.module('darts-training-app')
        .controller('HomeController', function ($scope, $location) {
            $scope.redirect = function(location) {
                $location.path(location);
            }
        });
}(window.angular));
