const express = require("express");
const mongoose = require("mongoose");

const app = express();
const db = mongoose.connect("mongodb://localhost/booksAPI");

const port = process.env.PORT || 8080;
const bookRouter = express.Router();

const Book = require("./models/bookModel");

bookRouter.route("/books").get((req, res) => {
  const response = { hello: "This is my API" };

  res.json(response);
});

app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
