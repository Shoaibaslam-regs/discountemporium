const express = require("express");
const router = express.Router();
 
const women = require("../data/womenapparel");
const menapparel = require("../data/menapparel");
const ladiesbag = require("../data/ladiesbag");
const cosmetic = require("../data/cosmetic");
const household = require("../data/household");
const shoes  = require("../data/shoes");

const categories = {women, menapparel, ladiesbag, cosmetic, household, shoes};
 
router.get("/:category", (req, res) => {
  const category = req.params.category.toLowerCase();

  if (!categories[category]) {
    return res.status(404).json({ error: "Category not found" });
  }

  res.json(categories[category]);
});

module.exports = router;
