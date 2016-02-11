/**
 * Created by kaufi on 06.02.2016.
 */
(function (angular) {

    'use strict';

    angular.module('darts-training-app')
        .controller('TrainingController', function ($scope, $log, $location) {


            if (!angular.isDefined($scope.data.selectedGameType)) {
                $location.path("selectGame")
            }
            $scope.record = {
                score: 0,
                date: new Date()
            };

            $scope.gameType = $scope.data.selectedGameType;


            $scope.addToScore = function(event) {
                var valueAsString = event.dataTransfer.getData('text');
                $log.debug(valueAsString);
                $scope.record.score += parseInt(valueAsString);
                $log.debug($scope.record.score);
                $scope.$apply();
                event.preventDefault();
            };

        });
}(window.angular));
