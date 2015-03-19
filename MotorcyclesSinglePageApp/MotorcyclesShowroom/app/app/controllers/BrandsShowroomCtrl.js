'use strict';

motorsApp.controller('BrandsShowroomController', function ($scope) {
    $scope.areDetailsShown = false;
    $scope.moreInfoButtonText = 'Show';
    $scope.brands = manufacturers;

    $scope.evenTextClass = "even-text-class";
    $scope.oddTextClass = "odd-text-class";

    $scope.showBrandDetails = function showBrandDetails() {
        if ($scope.areDetailsShown) {
            $scope.moreInfoButtonText = 'Show';
        }
        else {
            $scope.moreInfoButtonText = 'Hide';
        }

        $scope.areDetailsShown = !$scope.areDetailsShown;
    };
});

/**
 * Created by Radi on 3/12/2015.
 */
 
