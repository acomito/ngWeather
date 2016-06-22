'use strict';

var Forecast = require('forecast.io'),
    geocoder = require('geocoder'),
    apiKey = null;








exports.retrieveForecast = function (req, res) {
  var zipcode = req.params.zipcode,
      lat = null,
      lng = null,
      location = '',
      options = { APIKey: '22ce7db927131f9d8e18d60a94a52fb6' },
      forecast = new Forecast(options);

  geocoder.geocode(zipcode, function (err, data) {
    if (err) throw (err);
    location = data.results[0].formatted_address;
    lat = data.results[0].geometry.location.lat;
    lng = data.results[0].geometry.location.lng;
    callForecast(lat, lng, location);
  });

  function callForecast (lat, lng, location) {
    var refinedWeatherData, cityState;
    // Extract city and state only for the location
    cityState = location.match(/.+[A-Z]{2}(?= |,)/)[0];

    forecast.get(lat, lng, function (err, response, weatherData) {
      if (err) {
        res.send(err);
      } else {
        refinedWeatherData = {
          location          : cityState,
          temperature       : weatherData.currently.temperature,
          nowSummary        : weatherData.currently.summary.toLowerCase(),
          precipProbability : weatherData.currently.precipProbability,
          minuteData        : weatherData.minutely.data,
          minutelySummary   : weatherData.minutely.summary,
          icon   : weatherData.minutely.icon
        };
        return res.send(refinedWeatherData);
      }
    });
  }
};

exports.index = function (req, res) {
  res.sendfile('./public/index.html');
};


