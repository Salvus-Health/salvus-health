var express = require( 'express');

var auth = require( './auth');
var users = require( '../controllers/users');
var emails = require( '../controllers/emailController');
var response = require( '../helpers/response');

const routes  = express.Router();

routes.use(response.setHeadersForCORS);

// routes.use('/', auth);
// routes.use('/users', users);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'What up my peoples this is my new hello world' });
});

routes.route('/email-collection')
  .post(emails.create);


routes.use(function(req, res) {
  response.sendNotFound(res);
});


module.exports = routes;
