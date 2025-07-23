const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  type: String,
  description: String,
  image: String, // Project image
});

module.exports = mongoose.model('Project', projectSchema);