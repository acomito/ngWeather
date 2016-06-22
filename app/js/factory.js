'use strict'


/*angular.module('weatherApp').factory('WeatherFactory', function($http) {
  return {
    get: function(validZipCode) {
      return $http.get('/retrieveForecast/'+ validZipCode).then(function(resp){
        return resp.data;
      });
    }
  };
});*/



var WeatherFactory = function($http) {
  return {
    get: function(validZipCode) {
    	return $http.get('/retrieveForecast/'+ validZipCode).then(function(resp){
    		return resp;
    	});
    }
  };
};


angular.module('weatherApp').factory('WeatherFactory', WeatherFactory);





