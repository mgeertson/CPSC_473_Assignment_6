(function(window) {
    'use strict';
    var App = window.App || {};

    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }


    Truck.prototype.createOrder = function(order) {
        console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress, order);
    };

    Truck.prototype.deliverOrder = function(customerId) {
        console.log('Delivering order for ' + customerId);
        this.db.remove(customerId);
    };

    Truck.prototype.printOrders = function() {
        var customerIdArray = Object.keys(this.db.getAll());
        console.log('Truck #' + this.truckId + ' has pending orders:');
        customerIdArray.forEach(function(id) {
            console.log(this.db.get(id));

        }.bind(this));
    };
    //Additional function to return all of the objects (used for QUnit testing)
    Truck.prototype.getAllTruck = function() {
        var customerArray = Object(this.db.getAll());
        return customerArray;
    };
    App.Truck = Truck;
    window.App = App;
})(window);


// ESlint error:
// Unexpected console statement. (no-console)at line 11 col 9
// Unexpected console statement. (no-console)at line 16 col 9
// Unexpected console statement. (no-console)at line 22 col 9
// Unexpected console statement. (no-console)at line 24 col 13
