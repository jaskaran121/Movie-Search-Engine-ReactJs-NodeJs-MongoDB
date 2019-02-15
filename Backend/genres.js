const mongoose = require("mongoose");

// Genre Schema
const genreSchema = mongoose.Schema({
  genre: {
    type: String,
    required: true
  }
});

const Genre = (module.exports = mongoose.model("genres", genreSchema));

// Get Genres
module.exports.getGenres = (limit, callback) => {
  Genre.find({}, callback);
};
