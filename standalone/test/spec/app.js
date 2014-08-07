'use strict';

describe('Naddoddr: App', function () {

    // load the controller's module
    beforeEach(module('naddoddrApp'));

    describe('naddoddrProvider', function(){
        it('can get an instance of my factory', inject(function(naddoddrProvider) {
            expect(naddoddrProvider).toBeDefined();
        }));

        it('should have a function to parseToAdventures', inject(function(naddoddrProvider) {
            expect(naddoddrProvider.parseToAdventures).toBeDefined();
        }));

        describe('parseToAdventures', function(){
            it('should return empty Array if no params', inject(function(naddoddrProvider) {
                expect(naddoddrProvider.parseToAdventures().length).toBe(0);
            }));

            it('should return Adventure instance if array of one object', inject(function(naddoddrProvider) {
                var objects = [{'name': 'La Antilla'}];
                expect(naddoddrProvider.parseToAdventures(objects).length).toBe(1);
            }));
        });
    });

});