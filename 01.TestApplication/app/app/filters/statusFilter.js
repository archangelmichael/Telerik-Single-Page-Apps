/**
 * Created by Radi on 2/27/2015.
 */
'use strict';

myApp.filter('status', function statusFilter() {
    return function (input) {
        switch (input) {
            case '1': return 'sold'; break;
            case '2': return 'order'; break;
            default : return 'not available'; break;
        }
    }
});