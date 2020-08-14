const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", 'PUT, POST, PATCH, DELETE, GET');
  
  res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
});

module.exports = app;
