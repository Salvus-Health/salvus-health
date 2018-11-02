var mongoose = require('mongoose');
var response = require('../helpers/response');
var request = require('../helpers/request');
var pagination = require('../helpers/pagination');

const Doctor = mongoose.model('Doctor');


exports.doctorTest = function (req, res) {

    // const newEmail = new Email(req.body);
    res.status(200).send("hello from doctor");
};

exports.createDoctors = function (req, res) {
    const newDoctor = new Doctor(req.body);

    newDoctor.save(function (err, doctor) {
        if(err) return response.sendBadRequest(res,err);

        response.sendCreated(res, doctor);
    })
};

exports.getAllDoctors = function (req, res) {

    Doctor.find({}, function (err, doc) {

        if(err) return response.sendBadRequest(res, err);

        res.status(200).send(doc);
    })
};