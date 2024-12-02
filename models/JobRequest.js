// JobRequest.js

const mongoose = require('mongoose');

const jobRequestSchema = new mongoose.Schema({
  candidateEmail: { type: String, required: true },
});

module.exports = mongoose.model('JobRequest', jobRequestSchema);
