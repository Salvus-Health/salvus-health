var express = require('express');
var auth = require('../controllers/auth');

const routes = express.Router();

routes.route('/authenticate')
    .post(auth.authenticate);

module.exports = routes;
