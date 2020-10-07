// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;


// Routes
// ===========================================================
app.get("/", function(req, res) {
    res.send("tacos are great!")
});


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

