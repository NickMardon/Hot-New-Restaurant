 // Routes
//============================================================

const express =require("express");
const path = require("path");
const router = express.Router();

// JSON Arrays
//==============================================================
const reservationArr = [
  {
    name:"brent",
    phone:'32',
    email:"brent@billybrent.com"
}
];
const waitingArr = [
  {
    name:"brenda",
    phone:'24',
    email:"brenda@billybrent.com"
}
];

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