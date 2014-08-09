'use strict';

(function(window, naddoddr, undefined){
    naddoddr.Mock = {};
    naddoddr.Mock.Adventure = {};
    naddoddr.Mock.Adventure.basic = {
        'name': 'La Antilla',
        'description': 'Primer Baño de Duna en el Mar'
    };

    naddoddr.Mock.Adventure.adventures = [
        naddoddr.Mock.Adventure.basic
    ];

    naddoddr.Mock.Adventure.findAll = function(){
        return naddoddr.Mock.Adventure.adventures;
    }


})(window, naddoddr);