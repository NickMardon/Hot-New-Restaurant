// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

const reservationArr = [];
const waitingArr = [];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//created routes 
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/api/tables", function(req, res) {
    return res.json(reservationArr);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitingArr);
  });
  

app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  console.log(newReservation);

    if(reservationArr.length<5){
        reservationArr.push(newReservation);
    } else if (reservationArr.length>=5){
        waitingArr.push(newReservation);
    }

  res.json(newReservation);
});


app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
  