import React, { Component, Fragment } from "react";
import styles from "./Movies.module.css";

import MovieCards from "../../components/MovieCards/MovieCards";

class Movies extends Component {
  render() {
    return (
      <Fragment>
        <MovieCards />
      </Fragment>
    );
  }
}

export default Movies;
