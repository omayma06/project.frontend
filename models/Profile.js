// Profile.js

const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userEmail: { type: String, required: true }, // Changer le champ userId en userEmail
  // Ajouter d'autres champs de profil au besoin
});

module.exports = mongoose.model('Profile', profileSchema);
