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
        expect(adventure.get('stages')).toEqual([]);
        expect(adventure.name).toBe(name);
        expect(adventure.description).toBe(description);
        expect(adventure.stages).toEqual([]);
    });

    it('should return false if field doesnt exist', function () {
        var name = 'La Antillas';
        var adventure = new naddoddr.Adventure({'name':name});
        expect(adventure.get('inventedField')).toBe(false);
        expect(adventure.inventedField).not.toBe(false);
    });

    it('should return array of geopoints', function () {
        var AntillaAdventure = naddoddr.Mock.Adventure.findById(1);
        expect(AntillaAdventure.getGeopoints().length).toBe(1);
        expect(AntillaAdventure.getGeopoints()[0]).toEqual({'lat': 37.2071, 'lng': -7.2091, 'zoom' : 14, 'message' : 'La Antilla'});
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

    it('should have a center attribute with the middle if two stages with zoom 12 by the distance', function () {
        var CereceraAdventure = naddoddr.Mock.Adventure.findById(2);
        expect(CereceraAdventure.center).toEqual({'lat': 40.095186, 'lng': -5.952822, 'zoom': 12});
    });

    it('should have a center attribute with the middle of array of stages, use zoom 5 if distance more than 2000 kilometers between them', function () {
        var CruiseAdventure = naddoddr.Mock.Adventure.findById(3);
        expect(CruiseAdventure.center).toEqual({ 'lat' : 38.177136, 'lng' : 8.602107, 'zoom' : 5 });
    });

    it('should have a paths attribute with geopoints', function () {
        var CereceraAdventure = naddoddr.Mock.Adventure.findById(2);
        var CereceraAdventureLatlngs = [
            naddoddr.Mock.Adventure.twostages.stages[0].geopoints[0],
            naddoddr.Mock.Adventure.twostages.stages[1].geopoints[0]
        ]
        expect(CereceraAdventure.paths).toEqual([{'color': '#008000', 'weight': 8, 'latlngs':CereceraAdventureLatlngs}]);
    });

    it('should have a stages attribute with geopoints, each of them with a leaflet format', function () {
        var CereceraAdventure = naddoddr.Mock.Adventure.findById(2);

        expect(CereceraAdventure.stages[0].name).toBe('Cabrero');
        expect(CereceraAdventure.stages[0].content).toEqual('La cuadrillas a por cerezas, Duna ruta por el pueblo');
        expect(CereceraAdventure.stages[0].geopoints[0].lat).toEqual(40.112689);
        expect(CereceraAdventure.stages[0].geopoints[0].lng).toEqual(-5.891976);
        expect(CereceraAdventure.stages[0].geopoints[0].zoom).toEqual(14);
        expect(CereceraAdventure.stages[0].geopoints[0].message).toEqual('Cabrero');
    });
});
