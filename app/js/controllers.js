  'use strict'





 var weatherCtrl = function ($scope, WeatherFactory, $state) {

    $scope.weatherValues = {
      invalidZipcode: false,
      loadingSpinner: false,
      showForm: true
    };

  $scope.setZipcode = function(data) {

    var validZipCode;

    validZipCode = validateZipCode(data.zip);

     if (validZipCode === false) {
        $scope.weatherValues.invalidZipcode = true;
        return;
      }

      $scope.weatherValues.loadingSpinner = true;


      WeatherFactory.get(data.zip).then(function(factoryResponse){
          // catch any errors from HTTP call
          if (factoryResponse.status !== 200) {
              $scope.weatherValues.loadingSpinner = false;
              $scope.displayError();
              return;
          }
          // if no errors, move response into $scope and hide spinner
              $scope.displayWeatherData(factoryResponse.data);
              $scope.weatherValues.loadingSpinner = false;
      });


  function validateZipCode (zip) {
      return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);
  }

  };

  $scope.displayWeatherData = function (weatherData) {

    $scope.weatherValues.showForm = false;
    $scope.weatherValues.displayWeather = true;
    $scope.weatherData = weatherData;

    };

  $scope.displayError = function () {
    $scope.weatherValues.displayErrorMessage = true;
  };

  $scope.newSearch = function () {
    $scope.weatherValues = {
      invalidZipcode: false,
      loadingSpinner: false,
      showForm: true
    };
    $state.go('home')
  };

  

};



angular.module('weatherApp')
  .controller('weatherCtrl', weatherCtrl);



