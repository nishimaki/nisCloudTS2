/// <reference path="types.ts"/>

var nisApp = angular
        .module('nisApp', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/");
                $stateProvider
                    .state('home', {
                        url: '/',
                        templateUrl: '/html/home.html',
                    })
                    .state('home.home2', {
                        url: '/home2',
                        templateUrl: '/html/home2.html',
                    })
                    .state('home.blank', {
                        isLoginRequired: true,
                        url: '/blank',
                        templateUrl: '/html/blank.html'
                    })
        }]);


/***
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
***/