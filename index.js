// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api/get-ip", (req, res) => {
  const clientIp =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  res.send({ ip: clientIp });
});

app.get("/api/get-language", (req, res) => {
  const clientIp =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  res.send({ ip: clientIp });
});

app.get("/api/get-software", (req, res) => {
  const clientIp =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  res.send({ ip: clientIp });
});

// your first API endpoint...
app.get("/api/whoami", function (req, res) {
  // console.log(req.params.address);
  // console.log(req.ipaddress);
  // console.log(req.language);
  // console.log(req.software);

  console.log(req.headers["accept-language"]);
  console.log(req.headers["user-agent"]);
  console.log(req.headers[""]);
  const clientIp =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  res.json({
    ipaddress: clientIp,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
