const {
  findAllProjects,
  findProjectById,
  createProject,
} = require("../models/portfolioModel");

const getAllProjects = (req, res) => {
  const all = findAllProjects();
  res.status(200).json(all);
};

const getSingleProject = (req, res) => {
  const one = findProjectById(req.params.id);
  if (!one) return res.status(404).json({ message: "Not found" });
  res.status(200).json(one);
};

const createNewProject = (req, res) => {
  const newItem = createProject(req.body);
  res.status(201).json(newItem);
};

module.exports = {
  getAllProjects,
  getSingleProject,
  createNewProject,
};

