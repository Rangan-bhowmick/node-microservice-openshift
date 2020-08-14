const express = require("express");
const Video = require("./models/video_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  next();
});

app.get("/", (req, res) => {
 
  res.json({ msg: "videos" });
});

app.get("/api/v1/videos", async (req, res) => {
  const videos = await Video.find({});
  res.json(videos);
});

app.post("/api/v1/videos", async (req, res) => {
  const video = new Video({ name: req.body.name });
  const savedVideo = await video.save();

  res.json(savedVideo);
});

module.exports = app;
