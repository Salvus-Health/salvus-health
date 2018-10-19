var Mongoose = require('mongoose');
var config = require('config');

var dev = require('./../config/dev');

Mongoose.connect(dev.database.url, dev.database.properties);

const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error.'));
db.once('open', function callback() {
  console.log("Connection with database succeeded.");
});

exports.db = db;
