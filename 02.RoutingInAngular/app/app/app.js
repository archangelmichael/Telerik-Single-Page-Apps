/**
 * Created by Radi on 2/26/2015.
 */
'use strict';

var myApp = angular.module('myApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/home', {
            template: '<div> Welcome home </div>'
        }).when('/info', {
            template: '<div> No additional info available </div>'
        }).when('/details', {
            templateUrl: 'app/views/partials/details.html',
            controller: 'DetailsController'
        });

        $routeProvider.otherwise({ redirectTo: '/home'});
    });
