var express = require('express');

// import auth from '../../controllers/auth';
var doctor = require('../../controllers/doctorController');
var auth = require('../../controllers/auth');


const routes = express.Router();

// routes.use(response.setHeadersForCORS);


routes.route('/doctor-prof')
    .post(doctor.doctorTest);

//TODO: authenticate doctor
routes.route('/create')
    .post(doctor.createDoctors);


routes.route('/')
    .all(auth.verifyToken)
    .get(doctor.getAllDoctors);

module.exports = routes;
