'use strict';

describe('Core: Adventure', function () {

    beforeEach(function(){

    });

    it('should exists in naddoddr namespace ', function () {
        expect(naddoddr.Adventure).toBeDefined();
    });

    it('should use jQuery and its defined within extends function', function(){
        expect(jQuery).toBeDefined();
        expect(jQuery.extend).toBeDefined();
    })

    it('should allow to create objects, even if empty params', function () {
        var adventure = new naddoddr.Adventure({});
        expect(adventure).toBeDefined();
    });

    it('should return Adventure Name', function () {
        var adventure = new naddoddr.Adventure({})
        expect(adventure.get('name')).toBe('');
    });

    it('should recover any field', function () {
        var name = 'La Antilla';
        var description = 'Duna se mete en el mar!'
        var adventure = new naddoddr.Adventure({'name': name, 'description': description});
        expect(adventure.get('name')).toBe(name);
        expect(adventure.get('description')).toBe(description);
    });

    it('should return false if field doesnt exist', function () {
        var name = 'La Antillas';
        var adventure = new naddoddr.Adventure({'name':name});
        expect(adventure.get('inventedField')).toBe(false);
    });

    it('should return array of geopoints', function () {
        var AntillaAdventure = naddoddr.Mock.Adventure.findById(1);
        expect(AntillaAdventure.getGeopoints().length).toBe(1);
        expect(AntillaAdventure.getGeopoints()[0]).toEqual({'lat': 37.2071, 'lng': -7.2091});
    });

    it('should have a center attribute with geopoint and default zoom to 14', function () {
        var AntillaAdventure = naddoddr.Mock.Adventure.findById(1);
        expect(AntillaAdventure.center).toEqual({'lat': 37.2071, 'lng': -7.2091, 'zoom': 14});
    });

    it('should return array of markers', function () {
        var AntillaAdventure = naddoddr.Mock.Adventure.findById(1);
        expect(AntillaAdventure.getMarkers().length).toBe(1);
        expect(AntillaAdventure.getMarkers()[0]).toEqual({'message': 'La Antilla', 'lat': 37.2071, 'lng': -7.2091});
    });

    it('should have a markers attribute objects', function () {
        var AntillaAdventure = naddoddr.Mock.Adventure.findById(1);
        expect(AntillaAdventure.markers).toEqual([{'message': 'La Antilla', 'lat': 37.2071, 'lng': -7.2091}]);
    });

});
