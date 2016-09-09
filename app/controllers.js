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

app.controller('ProjectsCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.isCollapsed = true;
	$scope.isCollapsedHorizontal = true;

// 	  $scope.imageList = [
//     {
//       url: '/images/kgmarried.png',
//       name: 'kgmarried'
//     },
//     {
//       url: '/images/homeventory.png',
//       name: 'homeventory'
//     },
//     {
//       url: '/images/bestever.png',
//       name: 'bestever'
//     },
//     {
//       url: '/images/memory.png',
//       name: 'memory'
//     }
//   ]
// })

	$state.go('Projects')
}])