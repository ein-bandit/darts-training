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


            $scope.addToScore = function(data, event) {
                $scope.record.score += data.value;
                $log.debug($scope.record.score);
            };

        });
}(window.angular));
