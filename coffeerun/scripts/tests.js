/* global QUnit: false, App: false, myTruck: true */

//This is for the 8.10 example
QUnit.test('Create DataStore', function(assert) {
    var ds = new App.DataStore();
    ds = new App.DataStore();
    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpressho');
    assert.deepEqual(ds.getAll(), {
        'm@bond.com': 'tea',
        'james@bond.com': 'eshpressho'
    }, 'All the stuff!');
    ds.remove('james@bond.com');
    assert.deepEqual(ds.getAll(), {
        'm@bond.com': 'tea'
    }, 'All the stuff!');
    assert.equal(ds.get('m@bond.com'), 'tea');
    ds.get('james@bond.com');
});

//This is for the 8.32 example
QUnit.test('truck', function(assert) {
    myTruck.createOrder({
        emailAddress: 'me@goldfinger.com',
        coffee: 'double mocha'
    });
    myTruck.createOrder({
        emailAddress: 'dr@no.com',
        coffee: 'decaf'
    });
    myTruck.createOrder({
        emailAddress: 'm@bond.com',
        coffee: 'earl grey'
    });
    myTruck.printOrders();
    assert.deepEqual(myTruck.getAllTruck(), {
        'me@goldfinger.com': {
            'coffee': 'double mocha',
            'emailAddress': 'me@goldfinger.com'
        }
        'dr@no.com': {
            'coffee': 'decaf',
            'emailAddress': 'dr@no.com'
        },
        'm@bond.com': {
            'coffee': 'earl grey',
            'emailAddress': 'm@bond.com'
        }
    });
    myTruck.deliverOrder('dr@no.com');
    myTruck.deliverOrder('m@bond.com');
    myTruck.printOrders();
    assert.deepEqual(myTruck.getAllTruck(), {
        'me@goldfinger.com': {
            'coffee': 'double mocha',
            'emailAddress': 'me@goldfinger.com'
        }
    });

});

//Parsing error: Unexpected token 'dr@no.com' (Fatal)at line 47 col 9
