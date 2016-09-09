var Patients = require('../model/patients');

function patients () {
  var _this = this;
};

module.exports = patients;

patients.prototype.savePatient = function (model, query) {
  var _this = this;
  var patient;
  var model;

  console.log("THIS savePatient has been called!");
  patient = new Patients(model);
  model = patient.patientsModel();

  model({
    lastName: "lname",
    firstName: "fname",
    email: 'samuel@gmail.com',
    uniqueName: '14223214213'
  }).save(function(err) {
    if (err) throw err;
    console.log('User saved successfully!');
  });
}
