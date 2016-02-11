/**
 * Created by kaufi on 03.02.2016.
 */

(function (angular) {
    'use strict';

    angular.module('darts-training-app').factory('dataService', function (constants, $log, restService) {

        return {
            getGameTypes: function () {
                return restService.getData('/gametypes');
            },
            getGameType: function(name) {
                return restService.getData('/gametypes/', 'name=' + name);
            }
        };
    });
}(window.angular));