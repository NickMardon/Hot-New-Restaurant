 // Routes
//============================================================

const express =require("express");
const path = require("path");
const router = express.Router();

// Get Requests
  router.get("/api/tables", function(req, res) {
    return res.json(reservationArr);
  });

  router.get("/api/waitlist", function(req, res) {
    return res.json(waitingArr);
  });

//Post Request
router.post("/api/tables", function(req, res) {
    var newReservation = req.body;
  
      if(reservationArr.length<5){
          reservationArr.push(newReservation);
      } else if (reservationArr.length>=5){
          waitingArr.push(newReservation);
      }
  
    res.json(newReservation);
  });


  module.exports = router;