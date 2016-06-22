'use strict'


var routes = function($stateProvider, $urlRouterProvider, $locationProvider){

$urlRouterProvider.otherwise('home');
$locationProvider.html5Mode(true);

	$stateProvider

	.state('home', {
		url: '/',
		templateUrl: '/partials/partial-home.html'
	})
	.state('about', {
		url: '/about',
		templateUrl: '/partials/partial-about.html'
	})
	.state('forecastio', {
		url: '/forecastio',
		templateUrl: '/partials/partial-forecastio.html'
	});
};


angular.module('weatherApp').config(routes);