var express = require('express');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');

var User = require('./models/user');
var Item = require('./models/item');
var Email = require('./models/email');
var Doctor = require('./models/doctor');


var config = require('config');
var db = require('./db/db');
var routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', routes);

// const port = process.env.PORT || config.server.port;
const port = 9000;
app.listen(port);
console.log('Node + Express ' +
    'REST API skeleton server started on port: ' + port);

module.exports = app;
