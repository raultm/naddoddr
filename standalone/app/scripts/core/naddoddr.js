
(function(window, $, undefined){
    'use strict';
    var naddoddr = {};

    var defaultAdventure = {
        'name': '',
        'description': ''
    };

    naddoddr.Adventure = function(adventureValues){
        this._fields = $.extend(defaultAdventure, adventureValues);
    };

    naddoddr.Adventure.prototype.get = function(fieldName){
        if(this._fields[fieldName] === undefined ){ return false; }
        return this._fields[fieldName];
    }

    window.naddoddr = naddoddr;
})(window, jQuery);