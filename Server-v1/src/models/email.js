'use strict';

var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const EmailSchema = new Schema({
    email:{
        type:String,
        required : true,
        index: {unique:true}
    }
});


module.exports = mongoose.model('Email', EmailSchema);

