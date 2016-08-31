var app = angular.module('PortfolioApp', ['PortfolioCtrl', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('Home', {
  	url: '/',
  	templateUrl: 'views/home.html',
  	controller: 'HomeCtrl'
  })
  $stateProvider
  .state('About', {
  	url: '/about',
  	templateUrl: 'views/about.html',
  	controller: 'AboutCtrl'
  })
  $stateProvider
  .state('Contact', {
  	url: '/contact',
  	templateUrl: 'views/contact.html'
  })

}]);