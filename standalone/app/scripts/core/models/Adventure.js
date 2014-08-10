(function(window, $, naddoddr, undefined){
    'use strict';
    var defaultAdventure = {
        'name': '',
        'description': '',
        'stages': []
    };

    function Adventure(adventureValues){
        this._fields = {};
        $.extend(this._fields, defaultAdventure, adventureValues);
        var geopoints = this.getGeopoints();
        if(geopoints.length > 0){
            this.center = {
                'lat': geopoints[0].lat,
                'lng': geopoints[0].lng,
                'zoom': 14
            };
        }
    }

    Adventure.prototype.get = function(fieldName){
        if(this._fields[fieldName] === undefined ){ return false; }
        return this._fields[fieldName];
    }

    Adventure.prototype.getGeopoints = function(){
        var stages = this.get('stages');
        var geopoints = [];
        for(var i in stages){
            geopoints.push(stages[i].geopoint);
        }
        return geopoints;
    }

    Adventure.prototype.getMarkers = function(){
        var stages = this.get('stages');
        var markers = [];
        for(var i in stages){
            var marker = {
                'message': stages[i].name,
                'lat': stages[i].geopoint.lat,
                'lng': stages[i].geopoint.lng
            }
            markers.push(marker);
        }
        return markers;
    }

    naddoddr.Adventure = Adventure;

})(window, jQuery, naddoddr);