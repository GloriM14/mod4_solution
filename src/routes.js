(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/restaurant/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/restaurant/templates/categories.template.html',
    controller: 'CategoriesController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getItems(0);
      }]
    }
  })

  .state('items', {
    url: '/items/{itemId}',
    templateUrl: 'src/restaurant/templates/item.template.html',
    controller: 'ItemController as itemlist',
    resolve: {
      items2: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
                return MenuDataService.getItems($stateParams.itemId);
              //return ShoppingListService.getItemsForCategory($stateParams.itemId);
            }]
    }
  });
}

})();
