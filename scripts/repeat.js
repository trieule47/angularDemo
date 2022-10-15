(function (){
    'use strict';
    var app = angular.module('app', [])
   
    app.controller('repeatController', repeatController);

    repeatController.$inject = ['$scope'];

    function repeatController($scope) {
        var employees = [
            {firstName: 'Ben', lastName: 'White', cities: [{name:'London'},{ name: 'Chicago'}], gender: 'male', salary: 55000},
            {firstName: 'Sara', lastName: 'LEe', cities: [{name:'London'},{ name: 'Chicago'}], gender: 'female', salary: 25000},
            {firstName: 'Alax', lastName: 'Paut', cities: [{name:'London'},{ name: 'Chicago'}], gender: 'male', salary: 15000},
            {firstName: 'Join', lastName: 'ALex', cities: [{name:'London'},{ name: 'Chicago'}], gender: 'male', salary: 35000},
            {firstName: 'Dave', lastName: 'Good', cities: [{name:'London'},{ name: 'Chicago'}], gender: 'male', salary: 155000}
        ];
        $scope.employees = employees;
    }
})();