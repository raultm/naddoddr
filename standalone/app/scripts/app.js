'use strict';

/**
 * @ngdoc overview
 * @name naddoddrApp
 * @description
 * # naddoddrApp
 *
 * Main module of the application.
 */

angular
  .module('naddoddrApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule',
    'leaflet-directive'
  ])
    .config(['localStorageServiceProvider', function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('naddoddr');
    }])
    .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/adventures.index.html',
            controller: 'AdventuresCtrl'
        })
        .when('/adventures', {
            templateUrl: 'views/adventures.index.html',
            controller: 'AdventuresCtrl'
        })
        .when('/adventure/view/:adventureId', {
            templateUrl: 'views/adventure.view.html',
            controller: 'AdventureViewCtrl'
        })
        .when('/adventure/edit/:adventureId', {
            templateUrl: 'views/adventure.edit.html',
            controller: 'AdventureEditCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    }])
    .value('naddoddrProviderType', naddoddr.dataProvider)
    .factory('naddoddrProvider', ['naddoddrProviderType', function(naddoddrProviderType) {
        if(naddoddrProviderType === 'Mock') {
            return naddoddr.Mock;
        }
        return;
    }])
;


