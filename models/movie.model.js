// iteration #4: the movie model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: {type: mongoose.Schema.Types.ObjectId, ref: 'celebrity'}
});

const MovieModel = mongoose.model("movie", movieSchema);

module.exports = MovieModel;