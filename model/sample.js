var mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/myappdatabase');
var Schema = mongoose.Schema;
var patientsSchema = require('../schema/patients');

// if need to add more function. Add here
var patients = mongoose.model('Patient', patientsSchema);
module.exports = patients;
