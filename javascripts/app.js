/**
 * Created by raulete on 15/07/14.
 */
(function(){
    var app = angular.module('store', []);

    app.controller("TripsController", function(){
        this.trips = trips;
        console.log(this);
    });

    var trips = [
        {
            id: 1,
            name: "Cerecera/Kayaks",
            description: "Cerecera/Kayaks",
            geoposition: {lat: 0, lng: 0},
        },{
            id: 1,
            name: "Crucero2013",
            description: "Crucero2013",
            geoposition: {lat: 0, lng: 0},
        }
    ];

})();
