angular.module("app").controller("ShoeController", ["ShoeFactory", "$modal", function(ShoeFactory, $modal){
  var vm = this;
  var getShoes = function() {
    ShoeFactory.getShoes().then(function(data){
     vm.playlist = data;
   });
  }

  getShoes();
  vm.shoe = {};
  vm.openCreateModal = function() {
    var createModal = $modal.open({
      templateUrl: 'javascript/templates/createShoe.html',
      controller: 'CreateModalController',
      controllerAs: "vm",
      size: "lg"
    });
    createModal.result.then(function(shoeCreated){
      ShoeFactory.addShoe(shoeCreated).then(function(){
        getShoes();
      })
    })
  }
  vm.deleteShoe = function(shoe_id) {
    ShoeFactory.deleteShoe(shoe_id).then(function(){
      getShoes();
    })
  }
  vm.openEditModal = function(idx) {
    var editModal = $modal.open({
      templateUrl: 'javascript/templates/editShoe.html',
      controller: 'EditModalController',
      controllerAs: "vm",
      size: "lg",
      resolve: {
        shoe: function() {
          return ShoeFactory.playlist[idx];
        }
      }
    });
    editModal.result.then(function(shoeEdited){
      ShoeFactory.editShoe(shoeEdited).then(function(){
        getShoes();
      })
    })
  }
  vm.openAddImage = function(idx) {
    console.log("open add image ran");
    var addImageModal = $modal.open({
      templateUrl: 'javascript/templates/addImage.html',
      controller: 'addImageController',
      controllerAs: "vm",
      size: "lg",
      resolve: {
        shoe: function() {
          return ShoeFactory.playlist[idx];
        }
      }
    });
    addImageModal.result.then(function(shoeEditedWithImage){
      ShoeFactory.addImage(shoeEditedWithImage).then(function(){
        getShoes();
      })
    })
  }

}]);
