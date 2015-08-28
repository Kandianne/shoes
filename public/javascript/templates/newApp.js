/*This is taking all of our code and moving it off the global scope. First an anonymous function.
(function(){

})(); called an iife(Imediately invoked function expresssion) All of our angular files will be like this. */
/*
1. Take code off of global scope
2. Then "use strict";
3. The rest of the file
*/
(function(){
	"use strict"; //This does 20 diff things to make code super correct. Rules to avoid writing bad javascript functions
	angular.module("app",["ui.router"]).config(config);
	config.$inject = ["$stateProvider","$urlStateProvider"]; 
	
	function config($stateProvider, $urlStateProvider) {
		.state("Home", {
			url:"/",
			templateUrl: "javascript/templates/shoes.html",
			controller: "SongController",
			controllerAs: "vm"
		})
	}
})();