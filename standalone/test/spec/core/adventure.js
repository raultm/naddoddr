'use strict';

describe('Core: Adventure', function () {

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
        console.log(adventure);
        expect(adventure.get('name')).toBe('');
    });

    it('should recover any field', function () {
        var name = 'La Antilla';
        var adventure = new naddoddr.Adventure({'name':name});
        expect(adventure.get('name')).toBe(name);
    });

    it('should return false if field doesnt exist', function () {
        var name = 'La Antilla';
        var adventure = new naddoddr.Adventure({'name':name});
        expect(adventure.get('inventedField')).toBe(false);
    });


});