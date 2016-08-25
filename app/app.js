var app = angular.module('PortfolioApp', ['PortfolioCtrl', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('Home', {
  	url: '/',
  	templateUrl: 'home.html',
  	controller: 'HomeCtrl'
  })
  $stateProvider
  .state('About', {
  	url: '/about',
  	templateUrl: 'about.html',
  	controller: 'AboutCtrl'
  })

}]);