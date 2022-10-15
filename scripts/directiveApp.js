var myApp = angular
  .module("DEMO", [])
  .controller("directiveController", function ($scope) {})
  .directive("wellcomeDemo", function () {
    return {
        templateUrl: "../customdirective.html"
        //   template: "<h1>Wellcome</h1>"
    };
  });
