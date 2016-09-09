var functionPatients = require('./functions/patients');
var patient;
patient = new functionPatients();
module.exports = function (type, query) {
  switch (type) {
    case 'save':
      patient.savePatient(query);
      break;
    default:
    break;
  }
}
