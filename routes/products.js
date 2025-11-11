const express = require("express");
const router = express.Router();

const home = require("../data/home");
const men = require("../data/men");
const menappearl = require("../data/menappearl");
const ladiesbag = require("../data/ladiesbag");

const categories = { home, men, menappearl, ladiesbag};
 
router.get("/:category", (req, res) => {
  const category = req.params.category.toLowerCase();

  if (!categories[category]) {
    return res.status(404).json({ error: "Category not found" });
  }

  res.json(categories[category]);
});

module.exports = router;
