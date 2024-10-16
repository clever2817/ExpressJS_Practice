const express = require("express");

const app = express();

// Get Method
app.get((url = "/one"), function (req, res) {
  res.end("From Get Method");
});

//POST Method
app.post((url = "/two"), function (req, res) {
  res.end("From Post Method");
});

//Put Method
app.put((url = "/three"), function (req, res) {
  res.end("From Put Method");
});

//Patch Method
app.patch((url = "/four"), function (req, res) {
  res.end("From Patch Method");
});

// Delete Method
app.delete((url = "/five"), function (req, res) {
  res.end("From Delete Method");
});

app.listen(3000, function () {
  console.log("App is running on port 3000...");
});
