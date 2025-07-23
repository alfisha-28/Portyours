const Contact = require('../models/contactModel');

exports.createContact = async (req, res) => {
  try {
    const data = await Contact.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create contact' });
  }
};

exports.getContact = async (req, res) => {
  try {
    const data = await Contact.findOne();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contact' });
  }
};