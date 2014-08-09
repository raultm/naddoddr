'use strict';

describe('Controller: AdventuresCtrl', function () {

  // load the controller's module
  beforeEach(module('naddoddrApp'));

  var   AdventuresCtrl,
        scope;

  // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AdventuresCtrl = $controller('AdventuresCtrl', {
          $scope: scope
        });
    }));

    it('should have no items to start', function () {
      expect(scope.adventures.length).toBe(0);
    });

});
