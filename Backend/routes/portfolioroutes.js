const express = require('express');
const router = express.Router();
const {
  createPortfolio,
  getAllPortfolios,
  getPortfolioById
} = require('../controllers/portfolioController');

router.post('/create', createPortfolio);

router.get('/all', getAllPortfolios);
router.get('/:id', getPortfolioById);

module.exports = router;
