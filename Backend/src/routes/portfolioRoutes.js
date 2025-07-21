const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

// CREATE a new portfolio (usually POST)
router.post('/portfolios', portfolioController.createPortfolio);

// READ all portfolios
router.get('/portfolios', portfolioController.getAllPortfolios);

// READ one portfolio by ID
router.get('/portfolios/:id', portfolioController.getPortfolioById);

// UPDATE one portfolio by ID
router.put('/portfolios/:id', portfolioController.updatePortfolio);

// DELETE one portfolio by ID
router.delete('/portfolios/:id', portfolioController.deletePortfolio);// ✅ This must be a function

module.exports = router;