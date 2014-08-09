'use strict';

describe('Naddoddr: App', function () {

    // load the controller's module
    beforeEach(module('naddoddrApp'));

    describe('naddoddrProvider', function(){
        it('can get an instance of my factory', inject(function(naddoddrProvider) {
            expect(naddoddrProvider).toBeDefined();
        }));
    });

});