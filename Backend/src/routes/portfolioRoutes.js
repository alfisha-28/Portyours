const express = require('express');
const router = express.Router();

const {
  getAllProjects,
  getSingleProject,
  createNewProject,
} = require('../controllers/portfolioController');

router.get('/', getAllProjects);
router.get('/:id', getSingleProject);
router.post('/', createNewProject);

module.exports = router;