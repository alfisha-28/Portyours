const express = require('express');
const router = express.Router();
const { createProject, getProjects } = require('../controllers/projectController');

// POST => create a new project
router.post('/', createProject);

// GET => fetch all projects
router.get('/', getProjects);

module.exports = router;