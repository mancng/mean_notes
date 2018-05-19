//Require Express
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var mongoose = require ( 'mongoose' );

var http = require( 'http' );
var server = http.Server(app);
var port = process.env.PORT || 8000;

//Other server configs
app.use(bodyParser.json());
app.use(express.static(__dirname+'/angularApp/dist'));

//Mongoose/MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect( 'mongodb://localhost/mean_anonymous_notes_api' );
require( './server/config/mongoose.js' );

//Load routes
var routes_setter = require( './server/config/routes.js' );
routes_setter(app);

//Listen to server
server.listen(port);
console.log("I'm running on:", port);