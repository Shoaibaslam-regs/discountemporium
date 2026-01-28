const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/isAuth");
const SavedItem = require("../models/SavedItem");

router.post("/save-item", isAuth, async (req, res) => {

  const { productId } = req.body;
  const exists = await SavedItem.findOne({ userId: req.session.userId, productId });
  if (exists) return res.json({ success: true });

  await SavedItem.create({ userId: req.session.userId, ...req.body });
  res.json({ success: true });
});

router.get("/saved-items", isAuth, async (req, res) => {
  if (!req.session.userId) {
    return res.json([]);
  }
  const items = await SavedItem.find({ userId: req.session.userId });
  res.json(items);
});
router.post("/remove-item", isAuth, async (req, res) => {
  try {
    const { productId } = req.body;
    await SavedItem.deleteOne({ userId: req.session.userId, productId });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to remove item" });
  }
});

module.exports = router;
