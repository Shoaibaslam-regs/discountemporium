const express = require("express");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

router.get("/go", isAuth, (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send("URL missing");
  res.redirect(url);
});
 
router.post("/save-redirect", (req, res) => {
   const url = req.body.url;
  if (!url) return res.status(400).json({ ok: false });

  req.session.redirectAfterLogin = req.body.url;
     req.session.save(err => {
    if (err) return res.status(500).json({ ok: false });
    res.json({ ok: true });
  });
});


module.exports = router;
