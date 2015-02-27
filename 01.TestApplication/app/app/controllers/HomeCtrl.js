/**
 * Created by Radi on 2/26/2015.
 */

myApp.controller('HomeController', function ($scope, daysOfWeek, data) {
    $scope.hello = 'Hello';
    $scope.numbers = [3,4,5,6,231];
    $scope.students = [
        {'name': 'Sasho', 'mark': 5},
        {'name': 'Petur', 'mark': 3},
        {'name': 'Gosho', 'mark': 6},
        {'name': 'Ivan', 'mark':5}];

    var dayOfWeek = (new Date()).getDay();
    if(dayOfWeek <= 5) {
        $scope.isWorkDay = true;
    } else {
        $scope.isWorkDay = false;
    }

    $scope.workdayNoteHidden = false;
    $scope.hideWorkdayNote = function hideWorkdayNote() {
        $scope.workdayNoteHidden = !$scope.workdayNoteHidden;
    };

    $scope.workdaysNoteStyle = {'color': 'red'};

    $scope.people = data.getDataById(3);
});