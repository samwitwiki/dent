var functionPatients = require('./functions/patients');
var patient;
patient = new functionPatients();
module.exports = function (model, type, query) {
  switch (type) {
    case 'save':
      patient.savePatient(model, query);
      break;
    default:
    break;
  }
}
