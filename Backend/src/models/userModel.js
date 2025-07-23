const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  profilePhoto: String, // URL or file path
});

module.exports = mongoose.model('User', userSchema);