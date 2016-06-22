'user strict'



var zipcodeForm = function () {
  return {
    restrict: 'E',
    templateUrl: '/partials/zipcode-form.html',
  };
};


var loadingSpinner = function() {

	return {
    	restrict: 'E',
    	templateUrl: '/partials/loading-spinner.html'
  };

};



var weatherData = function () {
  return {
    restrict: 'E',
    templateUrl: '/partials/weather-data-display.html'
  };
};


var errorData = function () {
  return {
    restrict: 'E',
    templateUrl: '/partials/error-display.html'
  };
};




angular
.module('weatherApp')
	.directive('zipcodeForm', zipcodeForm)
	.directive('loadingSpinner', loadingSpinner)
	.directive('weatherData', weatherData)
	.directive('errorData', errorData);

