/**
 * Created by kaufi on 03.02.2016.
 */

(function (angular) {
    'use strict';

    angular.module('darts-training-app').factory('restService', function (constants,$rootScope, $http, $q, $log) {

        return {
            getData: function (path, query) {
                var deferred = $q.defer();

                var querystring = constants.rest + path + (angular.isDefined(query) ? '?' + query : '');

                $http.get(querystring, {cache: false, headers: {'Authorization': 'Basic ' + $rootScope.auth.authToken}})
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
            postData: function(path, data, isLogin) {
                var deferred = $q.defer();
                var query = constants.rest + path;
                var authHeader = {};
                if (!isLogin) {
                    authHeader = {'Authorization': 'Basic ' + $rootScope.auth.authToken};
                }

                $http.post(query, data, {headers: authHeader})
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