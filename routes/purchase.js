const express = require("express");
const router = express.Router();
const Purchase = require("../models/Purchase");

router.post("/purchase", async (req, res) => { 
  try {
    await Purchase.create(req.body);
    res.json({ success: true });
  } catch (err) {
    console.error("DB ERROR:", err);
    res.status(500).json({ success: false });
  }
});
module.exports = router;
