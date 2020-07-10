 // Routes
//============================================================

const express =require("express");
const path = require("path");
const router = express.Router();

// Get Requests
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

router.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "../reserve.html"));
});

router.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../tables.html"));
  });



  module.exports = router;