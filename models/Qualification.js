// Qualification.js

const mongoose = require('mongoose');

const qualificationSchema = new mongoose.Schema({
  userEmail: { type: String, required: true }, // Changer le champ userId en userEmail
  workDomain: { type: String, required: true },
  degrees: { type: String, required: true },
  certifications: { type: String, required: true },
  skillsAcquired: { type: String, required: true },
  workExperience: { type: String, required: true }
});

module.exports = mongoose.model('Qualification', qualificationSchema);
