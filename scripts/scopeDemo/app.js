var myApp = angular.module("scopeDemo", []);

var myController = function($scope, $rootScope){
    // $rootScope.name = "JS"
    
    $scope.sayHello = function () {
        // $scope.alert('hellllllllllllllo......')
        $scope.name = 'Angular JS';
    }
};


var schoolController = function($scope, $rootScope){
    // $scope.name = "TEDU"
    
    $scope.sayHello = function () {
        // $scope.alert('hellllllllllllllo......')
        $scope.name = 'TECH EDUCATION';
    }
};

var topController = function($scope){
    $scope.name = 'Top Scope'
}

myApp.controller('classController', myController);
myApp.controller('schoolController', schoolController);
myApp.controller('topController', topController);