
(function(window, $, undefined){
    'use strict';
    var naddoddr = {};

    var defaultAdventure = {
        'name': '',
        'description': ''
    };

    naddoddr.Adventure = function(adventureValues){
        this._fields = jQuery.extend(defaultAdventure, adventureValues);

        this.getName = function(){
            return this._fields.name;
        };
    };

    naddoddr.Adventure.prototype.get = function(fieldName){
        if(!this._fields[fieldName]){ return false; }
        return this._fields[fieldName];
    }

    window.naddoddr = naddoddr;
})(window);