const Project = require('../models/projectModel');

exports.createProject = async (req, res) => {
  try {
    const data = await Project.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project' });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const data = await Project.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};
