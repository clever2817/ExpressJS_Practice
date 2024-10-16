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

// app.put();

// app.patch();

// app.delete();

app.listen(3000, function () {
  console.log("App is running on port 3000...");
});
