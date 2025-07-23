const Portfolio = require('../models/portfolioModel');
const sendResponse = require('../utils/sendResponse');

exports.getAllPortfolios = async (req, res, next) => {
  try {
    const data = await Portfolio.find();
    sendResponse(res, 200, true, "All portfolios fetched", data);
  } catch (err) {
    next(err);
  }
};

// Create
exports.createPortfolio = async (req, res) => {
  try {
    const newProject = await Portfolio.create(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read All
// exports.getAllPortfolios = async (req, res) => {
//   try {
//     const portfolios = await Portfolio.find();
//     res.json(portfolios);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// Read One
exports.getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) return res.status(404).json({ error: 'Not found' });
    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updatePortfolio = async (req, res) => {
  try {
    const updated = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return the updated document
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deletePortfolio = async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
