'use strict';

var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');

var server = express();



// all environments
// --------------------------------------------------------------------
server.set('port', process.env.PORT || 3000);
/*server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'jade');*/
server.use('/scripts',  express.static(__dirname + '/node_modules')); // Use Node_Modules
server.use('/bower',  express.static(__dirname + '/bower_components')); // Use bower_components
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));
server.use(express.static(path.join(__dirname, 'app')));
server.use(favicon(path.join(__dirname,'public','images','favicon.ico')));


// ROUTES
// --------------------------------------------------------------------
server.get('/retrieveForecast/:zipcode', routes.retrieveForecast);
server.get('/*', routes.index);




// CREATE SERVER / NODE.js/
// --------------------------------------------------------------------
http.createServer(server).listen(server.get('port'), function(){
  console.log('Express server listening on port ' + server.get('port'));
});