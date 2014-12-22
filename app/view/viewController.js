var gameView = angular.module('app.gameView', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/character', {
            templateUrl : 'view/content/character.html',
            controller : 'characterCtrl'
        });
        $routeProvider.when('/crew', {
            templateUrl : 'view/content/crew.html',
            controller : 'crewCtrl'
        });
        $routeProvider.when('/ship', {
            templateUrl : 'view/content/ship.html',
            controller : 'shipCtrl'
        });
        $routeProvider.when('/map', {
            templateUrl : 'view/content/map.html',
            controller : 'mapCtrl'
        });
        $routeProvider.when('/adventure', {
            templateUrl : 'view/content/adventure.html',
            controller : 'adventureCtrl'
        });
    }]);