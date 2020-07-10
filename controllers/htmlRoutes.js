 // Routes
//============================================================

const express =require("express");
const path = require("path");
const router = express.Router();

const reservationArr = [
  {
    name:"Brent",
    phone:'323-507-2244',
    email:"brent@billybrent.com"
}
];
const waitingArr = [
  {
    name:"Brenda",
    phone:'242-555-7890',
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