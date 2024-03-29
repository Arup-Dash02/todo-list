const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();

  if (currentDay == 6 || currentDay == 0) {
    res.write("<h1>It is a Weekend.</h1>");
  } else {
    res.write("<h1>It is a working day.</h1>");
  }

  res.write("<h2>Radhe Radhe!</h2>");

  res.send();
});

app.listen(3000, function () {
  console.log("server started on port 3000.");
});
