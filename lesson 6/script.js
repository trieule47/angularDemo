var app = angular.module('handleEvent', []);
app.controller('handleEventController', ['$scope', function ($scope) {
    var technologies = [
        {Name: 'C#', Likes:1, Dislikes: 0},
        {Name: 'ÁP>NET#', Likes:1, Dislikes: 0},
        {Name: 'SQL SEVER', Likes:1, Dislikes: 0},
        {Name: 'ANGULARJS', Likes:1, Dislikes: 0},
    ]
    $scope.technologies = technologies;

    $scope.increaseLike = function (technology){
        technology.Likes++;
    }
    $scope.increaseDislike = function (technology){
        technology.Dislikes++;
    }
}]);