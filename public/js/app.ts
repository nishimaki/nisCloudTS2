/// <reference path="types.ts"/>

var nisApp = angular.module('nisApp', ['ngRoute'])
        .config(function ($routeProvider:ng.route.IRouteProvider) {
                $routeProvider.when('/', {
                        controller: 'TodoCtrl',
                        templateUrl: 'todomvc-index.html'
                }).when('/nis/', {
                        controller: 'NisCtrl',
                        templateUrl: 'nis-index.html'
                }).when('/:status', {
                        controller: 'TodoCtrl',
                        templateUrl: 'todomvc-index.html'
                }).otherwise({
                        redirectTo: '/'
                });
        });