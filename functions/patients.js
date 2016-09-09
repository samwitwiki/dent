var Patients = require('../model/patients');
var patient;

function patients () {
  var _this = this;
};

module.exports = patients;

patients.prototype.savePatient = function (query) {
  console.log("THIS savePatient has been called!");
  console.log("QUERY : ", query);
  // var patient = new Patients({
  //
  // });
  // patient.save(function(err) {
  //   if (err) throw err;
  //   console.log('User saved successfully!');
  // });
}
