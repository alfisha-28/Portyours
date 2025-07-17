const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: String,
  icon: String, 
  level: Number 
});

const projectSchema = new mongoose.Schema({
  title: String,
  type: String,
  description: String,
  image: String
});

const contactSchema = new mongoose.Schema({
  email: String,
  github: String,
  linkedin: String,
  twitter: String,
  facebook: String,
  instagram: String
});

const aboutSchema = new mongoose.Schema({
  course: String,
  aboutText: String,
  image: String 
});

const portfolioSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  profilePhoto: String, 

  about: aboutSchema,
  skills: [skillSchema],
  projects: [projectSchema],
  contact: contactSchema,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
