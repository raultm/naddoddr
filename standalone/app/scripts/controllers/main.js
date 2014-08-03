'use strict';

/**
 * @ngdoc function
 * @name naddoddrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the naddoddrApp
 */
angular.module('naddoddrApp')
  .controller('MainCtrl', function ($scope) {
        $scope.todos = [];

        $scope.addTodo = function () {
            $scope.todos.push($scope.todo);
            $scope.todo = '';
        };

        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };
  });
