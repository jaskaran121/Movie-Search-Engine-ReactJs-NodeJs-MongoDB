import React, { Component } from "react";
import Like from "./like";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  raiseSort(sortBy) {
    const sortColumn = this.props.sortColumn;
    if (sortColumn.sortBy === sortBy) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.order = "asc";
      sortColumn.sortBy = sortBy;
    }
    this.props.handleSort(sortColumn);
  }
  render() {
    const { movies, onLike, onDelete, onSort } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => this.raiseSort("title")}>Title</th>
              <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
              <th onClick={() => this.raiseSort("numberInStock")}>
                NumberInStock
              </th>
              <th onClick={() => this.raiseSort("dailyRentalRate")}>
                DailyRentalRate
              </th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>
                  <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
                </td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like liked={movie.liked} onClick={() => onLike(movie)} />
                </td>
                <td>
                  <button
                    onClick={() => onDelete(movie._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MoviesTable;
