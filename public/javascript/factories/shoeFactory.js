angular.module("app").factory("ShoeFactory", ["$http", "$q", function($http, $q){
  var ShoeFactory = {};
  var fbURL = "https://ksongs.firebaseio.com/";
  ShoeFactory.playlist = [];
  ShoeFactory.addShoe= function(shoe) {
    var q = $q.defer();
    $http.post(fbURL + ".json", shoe)
    .success(function(data){
      q.resolve();
    })
    .error(function(data){
      q.reject();
    })
    return q.promise;
  }
  ShoeFactory.editShoe = function(shoe) {
    var q = $q.defer();
    $http.put(fbURL + shoe._id + "/.json", shoe)
    .success(function(data){
      q.resolve();
    })
    .error(function(data){
      q.reject();
    })
    return q.promise;
  }
  ShoeFactory.addImage = function(shoeToAddImgTo) {
    var q = $q.defer();
    $http.put(fbURL + shoeToAddImgTo._id + "/.json", shoeToAddImgTo)
    .success(function(data){
      q.resolve();
    })
    .error(function(data){
      q.reject();
    })
    return q.promise;
  }
  ShoeFactory.deleteShoe = function(shoe_id) {
    var q = $q.defer();
    $http.delete(fbURL + shoe_id + "/.json")
    .success(function(data){
      q.resolve();
    })
    .error(function(data){
      q.reject();
    })
    return q.promise;
  }
  ShoeFactory.getShoes = function() {
    var q = $q.defer();
    $http.get(fbURL + ".json")
    .success(function(data){
      ShoeFactory.playlist.length = 0;
      for(var shoe in data) {
        data[shoe]._id = shoe;
        ShoeFactory.playlist.push(data[shoe]);
      }
      q.resolve(ShoeFactory.playlist);
    })
    .error(function(data){
      q.reject(data);
    })
    return q.promise;
  }

  return ShoeFactory;
}]);
