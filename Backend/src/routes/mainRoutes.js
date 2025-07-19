const express = require("express");
const router = express.Router();

// Home Route
router.get("/", (req, res) => {
  res.send("🏠 Home route from mainRoutes.js");
});

// About Route
router.get("/about", (req, res) => {
  res.json({ author: "Yusu", mission: "Become MERN Backend Master 💻⚔️" });
});

module.exports = router;
