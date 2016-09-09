angular.module('PortfolioCtrl', ['PortfolioServices', 'ui.bootstrap', 'ngAnimate'])

app.controller('NavbarCtrl', ['$scope', function($scope) {

}])

app.controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {
	// $scope.animate = true;

	$state.go('Home')
}])

app.controller('AboutCtrl', ['$scope', '$state', function($scope, $state) {
	$state.go('About')
}])

app.controller('PersonalCtrl', ['$scope', '$state', function($scope, $state) {
	$state.go('Personal')
}])

app.controller('ProjectsCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.isCollapsed = true;
	$scope.isCollapsedHorizontal = true;

	$scope.oneAtATime = true;

	$state.go('Projects')
}])