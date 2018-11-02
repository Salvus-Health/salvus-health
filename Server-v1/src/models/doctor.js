'use strict';

var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const DoctorSchema = new Schema({
    description:{
        type:String,
        required : true,
    },
    doctorWord: {
        type: String,
        required: true
    },
    services: {
        type: [Number],
        default: undefined
    },
    address: {
        type: [Number],
        required: true,
    },
    scheduledVisits: {
        type: [Date],
        default: undefined
    },
    headPhysician:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    clinicName: {
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    patientCap:{
        type:Number,
        required: true
    },
    patientCount: {
        type:Number,
        required: true
    },
    hours:{
        type:[String],
        required: true
    },
    registrationFee:{
        type: Number,
        required:true
    },
    visitFee:{
        type:Number,
        required: true
    },
    numberSalvusPatients:{
        type: Number,
        required: true
    },
    functional:{
        type: Boolean,
        default: false
    },
    tieredPay:{
        type: Boolean,
        default: false,
    },
    imgUrl:{
        type: String,
        required:false,
    }
});
/*
so: ID,
Name, *
Head Physician, *
Address, *
Phone#, *
Patient Cap, *
Patient Count, *
Hours,*
Description,*
Price,*
Registration Fee,*
Visit Fee,*
# of Salvus patients,*
Functional (boolean),
Tiered pay? (boolean)

*also the values required to store and present the
data for the profiles that i'm missing
 */

module.exports = mongoose.model('Doctor', DoctorSchema);

