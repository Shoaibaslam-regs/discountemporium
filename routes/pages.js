const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("index"));
router.get("/men", (req, res) => res.render("men"));
router.get("/women", (req, res) => res.render("women"));
router.get("/kids", (req, res) => res.render("kids"));
router.get("/toys", (req, res) => res.render("toys"));
router.get("/household", (req, res) => res.render("household"));

module.exports = router;
