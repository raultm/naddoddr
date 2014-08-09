(function(window, $, naddoddr, undefined){
    'use strict';
    var defaultAdventure = {
        'name': '',
        'description': ''
    };

    function Adventure(adventureValues){
        this._fields = $.extend(defaultAdventure, adventureValues);
    }

    Adventure.prototype.get = function(fieldName){
        if(this._fields[fieldName] === undefined ){ return false; }
        return this._fields[fieldName];
    }

    naddoddr.Adventure = Adventure;

})(window, jQuery, naddoddr);