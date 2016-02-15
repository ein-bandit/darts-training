'use strict';

angular.module('darts-training-app', [ 'ngRoute', 'ngDraggable', 'angular-md5', 'ui.bootstrap']);

angular.module('darts-training-app').run(function($rootScope, $location) {
    $rootScope.auth = null;

    $rootScope.$on('$routeChangeStart', function(event) {
        if (($location.path() != '/login' && $rootScope.auth == null) ||
            ($rootScope.auth != null && new Date() > new Date($rootScope.auth.validUntil))) {
            event.preventDefault();
            $location.path('/login');
        }
    });
});
