const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  movie: {
    title: String,
    numberInStock: String,
    dailyRentalRate: String,
    publishDate: String,
    genre: {
      _id: String,
      name: String
    }
  }
});

const Movies = (module.exports = mongoose.model("movies", movieSchema));

// Get Movies
module.exports.getMovies = (limit, callback) => {
  Movies.find({}, callback);
};
