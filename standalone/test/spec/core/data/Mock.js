'use strict';

describe('Core:Data Mock', function () {

    it('should exists in naddoddr namespace ', function () {
        expect(naddoddr.Mock).toBeDefined();
    });

    it('should have a basic adventure ', function () {
        expect(naddoddr.Mock.Adventure.basic).toBeDefined();
        expect(naddoddr.Mock.Adventure.basic._id).toBe(1);
        expect(naddoddr.Mock.Adventure.basic.name).toBe('La Antilla');
        expect(naddoddr.Mock.Adventure.basic.description).toBe('Primer Baño de Duna en el Mar');
        expect(naddoddr.Mock.Adventure.adventures).toBeDefined();
    });

    it('should have an array of adventures to provide', function () {
        expect(naddoddr.Mock.Adventure.adventures).toBeDefined();
        expect(naddoddr.Mock.Adventure.adventures[0]).toBe(naddoddr.Mock.Adventure.basic);
    });

    it('should have a function to parse Object to Adventure (Empty Object)', function(){
        var basicObject = {};
        var basicAdventure = new naddoddr.Adventure(basicObject);
        expect(naddoddr.Mock.Adventure.parseObject(basicObject)).toEqual(basicAdventure);
    });

    it('should have a function to parse Object to Adventure (Basic Object)', function(){
        var basicObject = naddoddr.Mock.Adventure.basic;
        var basicAdventure = new naddoddr.Adventure(basicObject);
        expect(naddoddr.Mock.Adventure.parseObject(basicObject)).toEqual(basicAdventure);
    });


    it('should return all Adventures if findAll', function () {
        expect(naddoddr.Mock.Adventure.findAll()).toBe(naddoddr.Mock.Adventure.adventures);
    });

    it('should return basic adventure if ask for Id 1', function () {
        expect(naddoddr.Mock.Adventure.findById(1)).toBe(naddoddr.Mock.Adventure.basic);
    });

    it('should return false if asked by id tha doesnt exist', function () {
        expect(naddoddr.Mock.Adventure.findById(1234)).toBe(false);
    });

});
