'use strict';

/**
 * @ngdoc function
 * @name naddoddrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the naddoddrApp
 */

angular.module('naddoddrApp')
    .controller('AdventureCtrl', ['$scope', '$routeParams', 'naddoddrProvider', function ($scope, $routeParams, naddoddrProvider) {
        console.log($routeParams);
        $scope.adventure = naddoddrProvider.Adventure.findById($routeParams.adventureId);

        $scope.$watch('adventure', function() {
            console.log('Cambios');
            $scope.adventure.refresh();
        }, true);
    }]);
