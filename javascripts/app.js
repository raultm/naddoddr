/**
 * Created by raulete on 15/07/14.
 */
(function(){
    var app = angular.module('store', []);

    app.controller("TripsController", ["$http", function($http){
        var tripsCtrl = this;
        tripsCtrl.trips = [];

        //$http({method: 'GET', url: 'http://naddoddr.apiary-mock.com/trips'})
        $http({method: 'GET', url: 'trips'})
            .success(function(data){
                tripsCtrl.trips = data;
            })
            .error(function(){

            })
        ;
    }]);
})();
