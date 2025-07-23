const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  course: String,
  aboutYourself: String,
  aboutImage: String, // optional image
});

module.exports = mongoose.model('About', aboutSchema);