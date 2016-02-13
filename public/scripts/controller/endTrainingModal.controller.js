/**
 * Created by kaufi on 06.02.2016.
 */
(function (angular) {

    'use strict';

    angular.module('darts-training-app')
        .controller('EndTrainingModalController', function ($scope, $log, $uibModalInstance, $location, data) {

            $scope.score = data.record.score;
            $scope.saveChanges = function () {
                data.data.selectedGameType = null;
                $location.path('selectGame');
                //service add record to db.
                $uibModalInstance.close();
            };

        });
}(window.angular));
