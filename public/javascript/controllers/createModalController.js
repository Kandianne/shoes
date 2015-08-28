angular.module("app").controller("CreateModalController", ["$modalInstance", function($modalInstance){
	var vm = this;
	vm.shoe = {};
	vm.addShoe = function() {
		$modalInstance.close(vm.shoe);
	};
}])
