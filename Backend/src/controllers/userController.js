const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const data = await User.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create User data', details: error });
  }
};

exports.getUser = async (req, res) => {
  try {
    const data = await User.findOne(); // or User.find() for all
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch User data' });
  }
};