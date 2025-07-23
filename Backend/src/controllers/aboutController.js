const About = require('../models/aboutModel');

exports.createAbout = async (req, res) => {
  try {
    const data = await About.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create about data' });
  }
};

exports.getAbout = async (req, res) => {
  try {
    const data = await About.findOne();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch about data' });
  }
};
