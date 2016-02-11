/**
 * Created by kaufi on 06.02.2016.
 */
(function (angular) {

    'use strict';

    angular.module('darts-training-app')
        .controller('SelectGameController', function ($scope, $location, $log, gameTypes) {
            $scope.data.gameTypes = gameTypes;

            $scope.selectGame = function(gameType) {
                $scope.data.selectedGameType = gameType;
                $location.path('training')
            };

            $scope.isActive = function(gameType) {
                if (angular.isDefined($scope.data.selectedGameType)) {
                $log.debug(gameType.name == $scope.data.selectedGameType.name);
                    return gameType.name == $scope.data.selectedGameType.name;
                } else {
                    return false;
                }
            };
        });
}(window.angular));
