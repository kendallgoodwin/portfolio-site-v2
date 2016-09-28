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

	$state.go('Projects')
}])

app.controller('Project1Ctrl', ['$scope', '$state', function($scope, $state) {
	$state.go('kgmarried')
}])

app.controller('Project2Ctrl', ['$scope', '$state', function($scope, $state) {
	$state.go('bestever')
}])

app.controller('Project3Ctrl', ['$scope', '$state', function($scope, $state) {
	$state.go('homeventory')
}])

app.controller('Project4Ctrl', ['$scope', '$state', function($scope, $state) {
	$state.go('memory')
}])