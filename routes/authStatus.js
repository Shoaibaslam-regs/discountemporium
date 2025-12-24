const express = require("express");
const router = express.Router();

router.get("/auth-status", (req, res) => {
  res.json({
    loggedIn: !!req.session.userId
  });
});

 
router.get("/current-user", (req, res) => {
  if (!req.session.userId) {
    return res.json({ loggedIn: false });
  }
  res.json({
    loggedIn: true,
    userId: req.session.userId,
    email: req.session.userEmail
  });
});

 
module.exports = router;