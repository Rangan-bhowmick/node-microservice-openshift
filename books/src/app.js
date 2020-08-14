const express = require("express");
const Book = require("./models/books_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  res.json({ msg: "books" });
});

app.get("/api/v1/books", async (req, res) => {
  const books = await Book.find({});

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  res.json(books);
});

app.post("/api/v1/books", async (req, res) => {
  const book = new Book({ name: req.body.name });
  const savedBook = await book.save();
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  res.json(savedBook);
});

module.exports = app;
