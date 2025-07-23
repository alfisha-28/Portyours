const Skills = require('../models/skillModel');

exports.createSkills = async (req, res) => {
  try {
    const data = await Skills.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create skills' });
  }
};

exports.getSkills = async (req, res) => {
  try {
    const data = await Skills.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
};