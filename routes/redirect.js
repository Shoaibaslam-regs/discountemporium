const express = require("express");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

router.get("/go", isAuth, (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send("URL missing");
  res.redirect(url);
});
 
router.post("/save-redirect", (req, res) => {
  req.session.redirectAfterLogin = req.body.url;
  res.json({ ok: true });
});


module.exports = router;
