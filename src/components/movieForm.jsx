import React, { Component } from "react";
import Form from "./form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "./../services/fakeMovieService";
class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    errors: {},
    genres: []
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    console.log(movieId);
    // if (movieId === "new") return;
    const movie = getMovie(movieId);
    // if (!movie) return this.props.history.replace("/not-found");

    //this.setState({ data: this.mapToViewModel(movie) });
  }
  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }
  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .min(1)
      .required()
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .integer()
      .min(1)
      .required()
      .label("Rate")
  };
  doSubmit = () => {
    console.log(this.state.data.dailyRentalRate);
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    const { genres } = this.state;
    return (
      <div style={{ padding: "35px 200px 200px" }}>
        <h2>New Movie</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "DailyRentalRate", "number")}
          {this.renderButton("Create")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
