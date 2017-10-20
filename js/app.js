var app = angular.module('app',['LocalStorageModule', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : "Templates/index.html"
    })
    .when('/:filterName' , {
        templateUrl : "Templates/index.html"
    })
});