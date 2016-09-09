var mongoose = require('mongoose');
mongoose.Promise = global.Promise
var Schema = mongoose.Schema;
var patientsSchema = require('../schema/patients');

function patients(mongoDB) {
  mongoose.connect('mongodb://'+mongoDB);
  console.log("MONGODB :: ", mongoDB);
}

module.exports = patients;

patients.prototype.patientsModel = function () {
  return mongoose.model('Patient', patientsSchema);
}
