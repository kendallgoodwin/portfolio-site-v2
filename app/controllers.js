angular.module('PortfolioCtrl', ['PortfolioServices', 'ui.bootstrap'])

app.controller('NavbarCtrl', ['$scope', function($scope) {

}])

app.controller('HomeCtrl', ['$scope', function($scope) {
	$state.go('Home')
}])