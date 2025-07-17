const Portfolio = require('../models/Portfolio');

// POST /api/portfolio/create
exports.createPortfolio = async (req, res) => {
  try {
    const data = req.body;

    const newPortfolio = new Portfolio(data);
    await newPortfolio.save();

    res.status(201).json({
      message: '🎉 Portfolio created successfully!',
      portfolioId: newPortfolio._id
    });
  } catch (error) {
    console.error('Error creating portfolio:', error.message);
    res.status(500).json({ error: 'Server error while creating portfolio' });
  }
};

// GET /api/portfolio/all
exports.getAllPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.status(200).json(portfolios);
  } catch (error) {
    console.error('Error fetching portfolios:', error.message);
    res.status(500).json({ error: 'Server error while fetching portfolios' });
  }
};

// Optional: GET /api/portfolio/:id
exports.getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }
    res.json(portfolio);
  } catch (error) {
    console.error('Error fetching portfolio:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};