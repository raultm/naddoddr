(function(window, $, naddoddr, geolib, undefined){
    'use strict';
    var defaultAdventure = {
        'name': '',
        'description': '',
        'stages': []
    };

    var emptyGeopoint = {
        'lat': 0,
        'lng': 0,
        'zoom': 0,
        'message': ''
    };

    function Adventure(adventureValues){
        this._fields = {};
        $.extend(this._fields, defaultAdventure, adventureValues);
        this.refresh();
    }

    Adventure.prototype.refresh = function(){
        this.name = this.get('name');
        this.description = this.get('description');
        this.stages = this.get('stages');
        this.markers = this.getMarkers();
        this.center = this.calculateCenter();
        this.paths = this.getPaths();
    }

    Adventure.prototype.get = function(fieldName){
        if(this._fields[fieldName] === undefined ){ return false; }
        var field = this._fields[fieldName];
        return field;
    }

//    Adventure.prototype.getFormattedStages = function(){
//        var stages = this.get('stages');
//        for(var i in stages){
//            geopoints.push(stages[i].geopoint);
//        }
//    }

    Adventure.prototype.getGeopoints = function(){
        var stages = this.get('stages');
        var geopoints = [];
        for(var i in stages){
            geopoints.push(stages[i].geopoints[0]);
        }
        return geopoints;
    }

    Adventure.prototype.getMarkers = function(){
        var stages = this.get('stages');
        var markers = [];
        for(var i in stages){
            var marker = {
                'message': stages[i].name,
                'lat': stages[i].geopoints[0].lat,
                'lng': stages[i].geopoints[0].lng
            }
            markers.push(marker);
        }
        return markers;
    }

    Adventure.prototype.calculateCenter = function(){
        var geopoints = this.getGeopoints();
        if(geopoints.length == 1){
            return {
                'lat': geopoints[0].lat,
                'lng': geopoints[0].lng,
                'zoom': 14
            };
        }

        if(geopoints.length > 1) {
            var center = geolib.getCenter(geopoints);
            return {
                'lat': parseFloat(center.latitude),
                'lng': parseFloat(center.longitude),
                'zoom': this.getZoomByDistance(center.distance)
            };
        }
    }

    Adventure.prototype.getZoomByDistance = function(distance){
        // Cerecera Distance -> 11.081
        return 12;
    }

    Adventure.prototype.getPaths = function(){
        return [{'color': '#008000', 'weight': 8, 'latlngs':this.getGeopoints()}];
    }

    naddoddr.Adventure = Adventure;

})(window, jQuery, naddoddr, geolib);