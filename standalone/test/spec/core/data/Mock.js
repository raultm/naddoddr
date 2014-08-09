'use strict';

describe('Core:Data Mock', function () {

    it('should exists in naddoddr namespace ', function () {
        expect(naddoddr.Mock).toBeDefined();
    });

    it('should have a basic adventure ', function () {
        expect(naddoddr.Mock.Adventure.basic).toBeDefined();
        expect(naddoddr.Mock.Adventure.basic.name).toBe('La Antilla');
        expect(naddoddr.Mock.Adventure.basic.description).toBe('Primer Baño de Duna en el Mar');
        expect(naddoddr.Mock.Adventure.adventures).toBeDefined();
    });

    it('should have an array of adventures to provide', function () {
        expect(naddoddr.Mock.Adventure.adventures).toBeDefined();
        expect(naddoddr.Mock.Adventure.adventures[0]).toBe(naddoddr.Mock.Adventure.basic);
    });

    it('should return all Adventures if findAll', function () {
        expect(naddoddr.Mock.Adventure.findAll()).toBe(naddoddr.Mock.Adventure.adventures);
    });

});
