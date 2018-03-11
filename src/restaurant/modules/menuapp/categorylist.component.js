(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/restaurant/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
