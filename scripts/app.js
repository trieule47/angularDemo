// var myApp= angular.module('myModule', []);

// myApp.controller("myController", function($scope){
//     $scope.message = 'Angularjs tutorial';

//     var employee = {
//         FirstName: 'Mark',
//         LastName: 'Hasting',
//         Gender: "Male"
//     };

//     $scope.employee = employee;
// })

var myApp = angular.module('myModule', []);

var myController = function($scope){
    $scope.message = 'Angularjs tutorial';

    var employee = {
        FirstName: 'Mark',
        LastName: 'Hasting',
        Gender: "Male"
    };

    $scope.employee = employee;
};

myApp.controller('myController', myController);
