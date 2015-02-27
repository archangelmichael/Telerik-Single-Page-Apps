/**
 * Created by Radi on 2/27/2015.
 */
'use strict';
myApp.factory('data', function () {
    var someData = [{'id':1, 'name':'gosho'},
        {'id':3, 'name':'gosho'},
        {'id':5, 'name':'ilia'},
        {'id':7, 'name':'pesho'},
        {'id':9, 'name':'izrael'}
    ];

    return {
        getData: function () {
            return someData;
        },
        getDataById: function (id) {
            return someData.filter(function filterByID(element) {
                return element.id == id;
            });
        },
        saveData: function (newData) {
            someData.push(newData);
        },
        deleteData: function (id) {
            someData = someData.filter(function filterByID(element) {
                return element.id != id;
            });
        }
    }
})