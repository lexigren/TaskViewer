angular.module('app',['ngResource',"ngRoute"]);

angular.module('app').config(function($routeProvider,$locationProvider){

    console.log("app started...");

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/',{
            templateUrl: '/partials/main.html',
            controller: 'MainCtrl'
        }).when('/tasks/:id',{
            templateUrl: '/partials/task-details.html',
            controller: 'DetailsCtrl'
        });

});