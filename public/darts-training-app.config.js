/**
 * Created by kaufi on 03.02.2016.
 */
angular.module('darts-training-app').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'

    }).when('/selectGame', {
        templateUrl: 'views/selectGame.html',
        controller: 'SelectGameController',
        resolve: {
            gameTypes: function(dataService) {
                return dataService.getGameTypes();
            }
        }
    }).when('/training', {
        templateUrl: 'views/training.html',
        controller: 'TrainingController'
    }).when('/login', {
        templateUrl: 'views/home.html',
        controller: 'LoginController'
    });
    $routeProvider.otherwise({redirectTo: '/'});
}]);