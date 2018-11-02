var express = require('express');
var users = require('../../controllers/users');
var auth = require('../../controllers/auth');
// var items = require('./items');
var doctor = require('../../controllers/doctorController');


const routes = express.Router();

// routes.use(response.setHeadersForCORS);


routes.route('/:id')
  .all(auth.verifyToken)
  .get(users.read)
  .put(users.update)
  .delete(users.delete);

routes.route('/')
  .get(auth.verifyToken, users.list)
  .post(users.create);

module.exports = routes;
