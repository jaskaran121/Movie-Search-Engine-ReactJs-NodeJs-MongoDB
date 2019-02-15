const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Movie = require("./movies");

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());

Genre = require("./genres");

// Connect to Mongoose
mongoose.connect("mongodb://localhost/movieDB", { useNewUrlParser: true });
var db = mongoose.connection;

app.get("/", (req, res) => {
  res.send("Please use /api/books or /api/genres");
});

app.get("/api/genres", (req, res) => {
  Genre.getGenres(10, function(err, result) {
    if (!err) res.status(200).json({ sucess: result });
    else res.status(400).json({ error: "Not able to get Values" });
  });
});

app.get("/api/movies", (req, res) => {
  Movie.getMovies(100, function(err, result) {
    if (!err) res.status(200).json({ sucess: result });
    else res.status(400).json({ error: "Not able to get Values" });
  });
});

app.listen(8000);
console.log("Running on port 8000...");
