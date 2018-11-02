
var express = require( 'express');

var auth = require( './auth');
// var users = require( '../controllers/users');
var users = require('./users');
var emails = require( '../controllers/emailController');
var response = require( '../helpers/response');
var doctor = require("./doctors/doctorRoute");

const routes  = express.Router();

routes.use(response.setHeadersForCORS);

routes.use('/', auth);
routes.use('/users', users);
routes.use('/doctors', doctor);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'What up my peoples this is my new hello world' });
});

routes.route('/email-collection')
  .post(emails.create);


// routes.route('/doctor-prof')
//     .post(doctor.doctorTest);


routes.use(function(req, res) {
  response.sendNotFound(res);
});


module.exports = routes;
