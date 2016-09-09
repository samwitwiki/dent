var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var patientSchema;
var patient;

patientSchema = new Schema({
  lastName: String,
  firstName: String,
  email: String,
  uniqueName: {type: String, required:true, unique: true},
  contactNumber: String,
  address: String,
  age: Number,
  occupation: String,
  referredBy: String,
  status: String,
  allergies: [String],
  complain: [{
    complainDescryption: String,
    treatment: [{
      treatmentDescription: String,
      procedures: [String],
      prescription: [{
        prescriptionName: String,
        prescriptionDetails: String
      }]
    }]
  }],
  createdAt: Date,
  updatedAt: Date,
});

patient = mongoose.model('Patient', patientSchema);
module.exports = patient;
