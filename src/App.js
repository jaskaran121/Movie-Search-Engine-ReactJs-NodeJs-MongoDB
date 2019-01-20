import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/common/navbar";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import NotFound from "./components/common/notFound";
import Login from "./components/login";
import Register from "./components/register";
import MovieForm from "./components/movieForm";
import MovieDetails from "./components/movieDetails";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/movies/new" component={MovieForm} />
            <Route path="/movies/:id" component={MovieDetails} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not- found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
