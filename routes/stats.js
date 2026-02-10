 const express = require("express");
const router = express.Router();
const Visit = require("../models/Visit");
const Purchase = require("../models/Purchase");
 
router.get("/user-visits", async (req, res) => {
  try {
    const visits = await Visit.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    res.json(visits);
  } catch (err) {
    console.error("User visits error:", err);
    res.status(500).json({ error: "Server error" });
  }
});
 
 
router.get("/redirects", async (req, res) => {
  try {
    const redirects = await Purchase.aggregate([
      { $match: { orderLink: { $exists: true, $ne: "" } } },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    res.json(redirects);
  } catch (err) {
    console.error("Redirects error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
