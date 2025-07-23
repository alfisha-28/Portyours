const express = require('express');
const router = express.Router();
const { createSkills, getSkills } = require('../controllers/skillsController');

// POST => add skills
router.post('/', createSkills);

// GET => fetch all skills
router.get('/', getSkills);

module.exports = router;