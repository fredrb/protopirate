var app = angular.module('app', [
    'ngRoute',
    'app.gameView'
]);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.otherwise({redirectTo : '/character'});
}]);

var data = {
    "current_view" : ""
};

//app.factory('Game', function(){
//    function Game(){
//
//    }
//})

app.controller("game", ['$scope' , function($scope){
    $scope.model = {
        "title" : "this is game"
    };
    $scope.player ={};

    $scope.promptName = function(){
        $scope.player.name = prompt("What's your name?");
    };

    $scope.getView = function(){
        return data.current_view;
    };
}]);

app.controller("menu", ['$scope', function($scope){
    $scope.model = {
        functions : [
            "character",
            "crew",
            "ship",
            "map",
            "adventure"
        ]
    }
}]);