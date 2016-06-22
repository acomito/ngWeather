


var layoutController = function($scope, $mdSidenav){

	$scope.toggleMenu = function(){
		$mdSidenav('SideNav').toggle();
	}





};


angular.module('weatherApp').controller('layoutController', layoutController);