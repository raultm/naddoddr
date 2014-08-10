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
    .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/adventures.html',
        controller: 'AdventuresCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    })
    .value('naddoddrProviderType', naddoddr.dataProvider)
    .factory('naddoddrProvider', ['naddoddrProviderType', function(naddoddrProviderType) {
        if(naddoddrProviderType === 'Mock') {
            return naddoddr.Mock;
        }
        return;
    }])
;


