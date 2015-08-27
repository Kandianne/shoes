angular.module("app").controller("addImageController", ["$modalInstance", "song", function($modalInstance, song){
	var vm = this;
	vm.song = song;
	vm.addImage = function(){
		$modalInstance.close(vm.song);
	}
}])