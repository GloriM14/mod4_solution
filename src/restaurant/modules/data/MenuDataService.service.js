(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$q', '$timeout', '$http', 'ApiBasePath']
function MenuDataService($q, $timeout, $http, ApiBasePath) {
  var service = this;
  var item = [];

  var items = [];
  var items2=[];


  service.getItems = function (d) {
if(d==0){
  service.getMatchedMenuItems ()
      var deferred = $q.defer();
      // Wait 2 seconds before returning
      $timeout(function () {
        // deferred.reject(items);
        deferred.resolve(items);
      }, 800);
}  else{
  service.getItemsForCategory(d)
      var deferred = $q.defer();
      // Wait 2 seconds before returning
      $timeout(function () {
        // deferred.reject(items);
        deferred.resolve(items2);
      }, 800);
}


    return deferred.promise;
  };

  service.getMatchedMenuItems =function (){

    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    promise.then(function (response) {
    items= response.data;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    })

return items
  }
  service.getitems2 =function (){
      var items2 = [];
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });
    return response
  }
  service.getItemsForCategory=function (d) {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params : {
        category: d
      }
    });
    promise.then(function (response) {

    items2= response.data.menu_items;

    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    })
  }
}

})();
