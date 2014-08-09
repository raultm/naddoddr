'use strict';

describe('Core:Naddoddr Config', function () {

    it('should have list of available data providers ', function () {
        expect(naddoddr.availableProviders).toBeDefined();
        expect(naddoddr.availableProviders.length).toBe(1);
    });

    it('should have a Mock availableProvider ', function () {
        expect(naddoddr.availableProviders.indexOf('Mock')).not.toBe(-1);
    });

    it('should have a defaultData provider included in availableProvider ', function () {
        expect(naddoddr.availableProviders.indexOf(naddoddr.dataProvider)).not.toBe(-1);
    });

});