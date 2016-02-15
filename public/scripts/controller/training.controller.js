/**
 * Created by kaufi on 06.02.2016.
 */
(function (angular) {

    'use strict';

    angular.module('darts-training-app')
        .controller('TrainingController', function ($scope, $log, $uibModal, $location) {

            if (!angular.isDefined($scope.data.selectedGameType)) {
                $location.path("selectGame")
            }
            $scope.record = {
                score: 0,
                date: new Date()
            };
            $scope.isTrainingRunning = true;
            $scope.currentRound = 0;

            $scope.gameType = $scope.data.selectedGameType;

            $scope.addToScore = function(data, event) {
                $scope.record.score += data;
                //$log.debug($scope.record.score);
                $scope.currentRound += 1;
                if ($scope.currentRound == $scope.gameType.rounds.length) {
                    $log.debug('show results');
                    $scope.isTrainingRunning = false;
                    $scope.open();
                }
            };


            $scope.open = function (size) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    keyboard: false,
                    backdrop: 'static',
                    templateUrl: '../../views/endTrainingModal.html',
                    controller: 'EndTrainingModalController',
                    size: size,
                    resolve: {
                        data: function () {
                            return { record: $scope.record, data: $scope.data};
                        }
                    }
                });
            };

        });
}(window.angular));
