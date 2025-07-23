const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  email: String,
  github: String,
  twitter: String,
  linkedin: String,
  facebook: String,
  instagram: String,
});

module.exports = mongoose.model('Contact', contactSchema);