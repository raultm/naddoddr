'use strict';

describe('Controller: AdventuresCtrl', function () {

  // load the controller's module
  beforeEach(module('naddoddrApp', function($provide) {
      $provide.factory('naddoddrProvider', function(){
          return naddoddr.Mock;
      });
  }));

  var   AdventuresCtrl, scope, naddoddrProvider;

  // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _naddoddrProvider_) {
        scope = $rootScope.$new();
        naddoddrProvider = _naddoddrProvider_;
        AdventuresCtrl = $controller('AdventuresCtrl', {
          $scope: scope
        });
    }));

    it('should match the number of adventures with the naddoddrProvider', function () {
        expect(scope.adventures.length).toBe(naddoddrProvider.Adventure.adventures.length);
    });

});
