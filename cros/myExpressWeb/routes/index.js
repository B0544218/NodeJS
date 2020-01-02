var express = require("express");
var spawn = require("child_process").spawn;
var iconv = require("iconv-lite");

var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
