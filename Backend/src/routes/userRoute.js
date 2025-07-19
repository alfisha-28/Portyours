const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "Yusu" },
  { id: 2, name: "Elena" },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  res.json(user || { error: "User not found" });
});

module.exports = router;
