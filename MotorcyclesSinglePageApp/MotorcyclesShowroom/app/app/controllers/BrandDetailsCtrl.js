'use strict';

motorsApp.controller('BrandDetailsController', function ($scope) {
    $scope.areDetailsShown = false;
    $scope.areModelsShown = false;
    $scope.moreInfoButtonText = 'Show';
    $scope.modelsInfoButtonText = 'Preview Models';

    $scope.brand = manufacturers[0];

    $scope.evenTextClass = "even-text-class";
    $scope.oddTextClass = "odd-text-class";

    $scope.showBrandDetails = function showBrandDetails() {
        if($scope.areDetailsShown) {
            $scope.moreInfoButtonText = 'Show';
        }
        else {
            $scope.moreInfoButtonText = 'Hide';
        }

        $scope.areDetailsShown = !$scope.areDetailsShown;
    };

    $scope.showModelsInformation = function showModelsInformation() {
        if($scope.areModelsShown) {
            $scope.modelsInfoButtonText = 'Preview Models';
        }
        else {
            $scope.modelsInfoButtonText = 'Hide Preview';
        }

        $scope.areModelsShown = !$scope.areModelsShown;
    };

    $scope.promoteModel = function promoteModel(model) {
        model.likes ++;
    };
    $scope.demoteModel = function demoteModel(model) {
        if(model.likes > 0) {
            model.likes--;
        }
    };
});
/**
 * Created by Radi on 2/27/2015.
 */
 
