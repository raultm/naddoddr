'use strict';

describe('Core:Data Mock', function () {

    it('should exists in naddoddr namespace ', function () {
        expect(naddoddr.Mock).toBeDefined();
    });

    it('should have a basic adventure ', function () {
        expect(naddoddr.Mock.Adventure.basic).toBeDefined();
        expect(naddoddr.Mock.Adventure.basic.name).toBe('La Antilla');
        expect(naddoddr.Mock.Adventure.basic.description).toBe('Primer Baño de Duna en la Playa');
    });

});
