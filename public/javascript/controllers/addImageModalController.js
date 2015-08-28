angular.module("app").controller("addImageController", ["$modalInstance", "shoe", function($modalInstance, shoe){
	var vm = this;
	vm.shoe = shoe;
	vm.addImage = function(){
		$modalInstance.close(vm.shoe);
	}
}])