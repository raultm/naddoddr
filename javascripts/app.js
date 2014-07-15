/**
 * Created by raulete on 15/07/14.
 */
(function(){
    var app = angular.module('store', []);

    app.controller("StoreController", function(){
        this.product = gem;
    });

    var gem = {
        name: "Dodecahedron",
        price: 2.95,
        description: ". . .",
    }
})();
