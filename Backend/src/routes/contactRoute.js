const express = require('express');
const router = express.Router();
const { createContact, getContact } = require('../controllers/contactController');

// POST => create contact info
router.post('/', createContact);

// GET => fetch contact info
router.get('/', getContact);

module.exports = router;