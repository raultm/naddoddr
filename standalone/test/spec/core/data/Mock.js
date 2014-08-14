'use strict';

describe('Core:Data Mock', function () {

    it('should exists in naddoddr namespace ', function () {
        expect(naddoddr.Mock).toBeDefined();
    });

    describe('As Data Provider', function(){
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

        it('should have a function to parse Objects to Adventures', function(){
            var basicObjects = [{}, naddoddr.Mock.Adventure.basic];
            var basicAdventures = [
                new naddoddr.Adventure(basicObjects[0]),
                new naddoddr.Adventure(basicObjects[1])
            ]
            expect(naddoddr.Mock.Adventure.parseObjects(basicObjects)).toEqual(basicAdventures);
        });

        it('should return all Adventures if findAll', function () {
            var adventures = naddoddr.Mock.Adventure.parseObjects(naddoddr.Mock.Adventure.adventures);
            expect(naddoddr.Mock.Adventure.findAll()).toEqual(adventures);
        });

        it('should return basic adventure if ask for Id 1', function () {
            var adventure = naddoddr.Mock.Adventure.parseObject(naddoddr.Mock.Adventure.basic);
            expect(naddoddr.Mock.Adventure.findById(1)).toEqual(adventure);
        });

        it('should return false if asked by id tha doesnt exist', function () {
            expect(naddoddr.Mock.Adventure.findById(1234)).toBe(false);
        });
    });

    describe('Adventures Mocked', function(){
        it('should have an array of adventures to provide', function () {
            expect(naddoddr.Mock.Adventure.adventures).toBeDefined();
            expect(naddoddr.Mock.Adventure.adventures.length).toBe(3);
            expect(naddoddr.Mock.Adventure.adventures[0]).toBe(naddoddr.Mock.Adventure.manystages);
            expect(naddoddr.Mock.Adventure.adventures[1]).toBe(naddoddr.Mock.Adventure.twostages);
            expect(naddoddr.Mock.Adventure.adventures[2]).toBe(naddoddr.Mock.Adventure.basic);
        });
    });

    describe('AntillaAdventure', function(){
        it('should have a basic adventure ', function () {
            expect(naddoddr.Mock.Adventure.basic).toBeDefined();
            expect(naddoddr.Mock.Adventure.basic._id).toBe(1);
            expect(naddoddr.Mock.Adventure.basic.name).toBe('La Antilla');
            expect(naddoddr.Mock.Adventure.basic.description).toBe('Vacaciones Verano 2014');
            expect(naddoddr.Mock.Adventure.basic.stages.length).toBe(1);
            expect(naddoddr.Mock.Adventure.basic.stages[0].name).toBe('La Antilla');
            expect(naddoddr.Mock.Adventure.basic.stages[0].content).toBe('Duna se baña por primera vez en el Mar');
            expect(naddoddr.Mock.Adventure.basic.stages[0].geopoints).toEqual([{'lat': 37.2071, 'lng': -7.2091, 'zoom': 14, 'message': 'La Antilla'}]);
            expect(naddoddr.Mock.Adventure.adventures).toBeDefined();
        });
    });

    describe('CereceraAdventure', function(){
        it('should have a twostages adventure ', function () {
            expect(naddoddr.Mock.Adventure.twostages).toBeDefined();
            expect(naddoddr.Mock.Adventure.twostages._id).toBe(2);
            expect(naddoddr.Mock.Adventure.twostages.name).toBe('Cerecera y Kayaks');
            expect(naddoddr.Mock.Adventure.twostages.description).toBe('Valle del Jerte, Cerezas, Familia y Kayaks');
            expect(naddoddr.Mock.Adventure.twostages.stages.length).toBe(2);
            expect(naddoddr.Mock.Adventure.twostages.stages[0].name).toBe('Cabrero');
            expect(naddoddr.Mock.Adventure.twostages.stages[0].content).toBe('La cuadrillas a por cerezas, Duna ruta por el pueblo');
            expect(naddoddr.Mock.Adventure.twostages.stages[0].geopoints).toEqual([{'lat': 40.112689, 'lng': -5.891976, 'zoom': 14, 'message': 'Cabrero'}]);
            expect(naddoddr.Mock.Adventure.twostages.stages[1].name).toBe('Kayaks');
            expect(naddoddr.Mock.Adventure.twostages.stages[1].content).toBe('Kayaks con Guia2 en el Embalse de Plasencia');
            expect(naddoddr.Mock.Adventure.twostages.stages[1].geopoints).toEqual([{'lat': 40.077683, 'lng': -6.013669, 'zoom': 14, 'message': 'Kayaks'}]);
        });
    });

    describe('MediterraneCruiseAdventure', function(){
        it('should have a many stages adventure ', function () {
            expect(naddoddr.Mock.Adventure.manystages).toBeDefined();
            expect(naddoddr.Mock.Adventure.manystages._id).toBe(3);
            expect(naddoddr.Mock.Adventure.manystages.name).toBe('Crucero Mediterráneo');
            expect(naddoddr.Mock.Adventure.manystages.description).toBe('Crucero por el mediterráneo compartido con Manoli');
            expect(naddoddr.Mock.Adventure.manystages.stages.length).toBe(7);
        });
    });

});
