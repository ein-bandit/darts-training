/**
 * Created by kaufi on 03.02.2016.
 */

(function (angular) {
    'use strict';

    angular.module('darts-training-app').factory('dataService',
        function (constants, $log, md5, restService, $q, $rootScope, $location) {

            return {
                getGameTypes: function () {
                    return restService.getData('/gametypes');
                },
                getGameType: function (name) {
                    return restService.getData('/gametypes/', 'name=' + name);
                },
                performLogin: function (user) {
                    var deferred = $q.defer();
                    var tempUser = user;
                    restService.postData('/user/login',
                        {username: user.user, password: md5.createHash(user.password)}, true).then(function (data) {
                        if (data) {
                            $rootScope.auth = data.auth;
                            $rootScope.user = {username: tempUser.username, userId: data.userId}
                            deferred.resolve(false);

                        } else {
                            deferred.resolve(true);
                        }
                    });
                    return deferred.promise;
                }
            };
        });
}(window.angular));