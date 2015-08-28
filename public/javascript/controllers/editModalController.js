angular.module("app").controller("EditModalController", ["$modalInstance", "shoe", function($modalInstance, shoe){
	var vm = this;
	vm.shoe = shoe;
	vm.editShoe = function() {
		$modalInstance.close(vm.shoe);
	}
}]);
