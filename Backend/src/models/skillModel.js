const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: String,
  icon: String, // optional icon URL or emoji
});

module.exports = mongoose.model('Skill', skillSchema);