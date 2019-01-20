import React, { Component } from "react";

class MovieDetails extends Component {
  state = {};
  render() {
    const { match } = this.props;
    return <h2>MovieDetails {match.params.id}</h2>;
  }
}

export default MovieDetails;
