/**
 * Created by kaufi on 03.02.2016.
 */

(function (angular) {
    'use strict';

    angular.module('darts-training-app').factory('restService', function (constants, $http, $q, $log) {

        return {
            getData: function (path, query) {
                var deferred = $q.defer();

                var querystring = constants.rest + path + (angular.isDefined(query) ? '?' + query : '');

                $http.get(querystring, {cache: false})
                    .success(function (data) {
                        $log.debug('received:', data);
                        deferred.resolve(data);
                    })
                    .error(function () { //data
                        $log.debug('error in getting data');
                        deferred.reject();
                    });
                return deferred.promise;
            },
            postData: function(path, data) {
                var deferred = $q.defer();
                var query = constants.rest + path;
                $http.post(query, data)
                    .success(function(result) {
                        deferred.resolve(result);
                    })
                    .error(function () { //data
                        $log.debug('error in getting data');
                        deferred.reject();
                    });
                return deferred.promise;
            },
            saveData: function(path, data) {
                var deferred = $q.defer();
                return deferred.promise;
            }
        };
    });
}(window.angular));