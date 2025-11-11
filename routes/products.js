const express = require("express");
const router = express.Router();

const men = require("../data/men");
const menappearl = require("../data/menappearl");
const ladiesbag = require("../data/ladiesbag");
// const toys = require("../data/toys");
// const household = require("../data/household");

const categories = { men, menappearl, ladiesbag};

// GET /api/products/men
router.get("/:category", (req, res) => {
  const category = req.params.category.toLowerCase();

  if (!categories[category]) {
    return res.status(404).json({ error: "Category not found" });
  }

  res.json(categories[category]);
});

module.exports = router;
