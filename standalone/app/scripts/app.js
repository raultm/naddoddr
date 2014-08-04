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
    'LocalStorageModule'
  ])
    .config(['localStorageServiceProvider', function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('naddoddr');
    }])
    .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    })
    .factory('DataProvider', function() {
        var adventures = [{ 'name': 'Jerez de la Frontera' }];

        var DataProvider = function() {

        };

        DataProvider.prototype.getAdventures = function(){
            return adventures;
        };

        return DataProvider;
    })

;
