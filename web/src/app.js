const express = require("express");
const path = require("path");
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  next();
});

app.get("/", (req, res) => {
  
  res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
});

module.exports = app;
