'use strict';

(function(window, naddoddr, undefined){
    naddoddr.Mock = {};
    naddoddr.Mock.Adventure = {};
    naddoddr.Mock.Adventure.basic = {
        '_id': 1,
        'name': 'La Antilla',
        'description': 'Vacaciones Verano 2014',
        'stages': [
            {
                'name': 'La Antilla',
                'content': 'Duna se baña por primera vez en el Mar',
                'geopoints': [{'lat': 37.2071, 'lng': -7.2091, 'zoom': 14, 'message': 'La Antilla'}]
            }
        ]
    };

    naddoddr.Mock.Adventure.twostages = {
        '_id': 2,
        'name': 'Cerecera y Kayaks',
        'description': 'Valle del Jerte, Cerezas, Familia y Kayaks',
        'stages': [
            {
                'name': 'Cabrero',
                'content': 'La cuadrillas a por cerezas, Duna ruta por el pueblo',
                'geopoints': [{'lat': 40.112689, 'lng': -5.891976, 'zoom': 14, 'message': 'Cabrero'}]
            },
            {
                'name': 'Kayaks',
                'content': 'Kayaks con Guia2 en el Embalse de Plasencia',
                'geopoints': [{'lat': 40.077683, 'lng': -6.013669, 'zoom': 14, 'message': 'Kayaks'}]
            }
        ]
    }

    naddoddr.Mock.Adventure.adventures = [
        naddoddr.Mock.Adventure.twostages,
        naddoddr.Mock.Adventure.basic
    ];

    naddoddr.Mock.Adventure.findAll = function(){
        return naddoddr.Mock.Adventure.parseObjects(naddoddr.Mock.Adventure.adventures);
    }

    naddoddr.Mock.Adventure.findById = function(id){
        var adventures = naddoddr.Mock.Adventure.adventures;
        for(var index in adventures){
            if(adventures[index]._id == id){
                return naddoddr.Mock.Adventure.parseObject(adventures[index]);
            }
        }
        return false;
    }

    naddoddr.Mock.Adventure.parseObject = function(object) {
        return new naddoddr.Adventure(object);
    }

    naddoddr.Mock.Adventure.parseObjects = function(objects) {
        var adventures=[];
        for(var i in objects){
            adventures.push(naddoddr.Mock.Adventure.parseObject(objects[i]));
        }
        return adventures;
    }

})(window, naddoddr);