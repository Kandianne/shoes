angular.module("app", ["ui.router", "ui.bootstrap"])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");
	$stateProvider
	.state("Home", {
		url:"/",
		templateUrl: "javascript/templates/shoes.html",
		controller: "ShoeController",
		controllerAs: "vm"
	})
}]);
