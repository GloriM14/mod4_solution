(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);

// 'item' is injected through state's resolve
ItemController.$inject = ['items2']
function ItemController(items2) {
  var itemlist = this;
    itemlist.items2 = items2;


}

})();
