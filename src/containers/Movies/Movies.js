import React, { Component, Fragment } from "react";

import axios from "../../axios-custom";

import styles from "./Movies.module.css";

import MovieCards from "../../components/MovieCards/MovieCards";

class Movies extends Component {
  state = {
    movies: [],
    loading: false,
  };

  componentDidMount() {
    axios
      .get("movie/popular?api_key=6298ebd066f18ba169d303bf2858107d")
      .then((res) => {
        this.setState({
          movies: res.data.results,
        });
      });
  }

  render() {
    const movies = this.state.movies.map((movie) => {
      return (
        <MovieCards
          key={movie.id}
          title={movie.title}
          poster={movie.poster_path}
        />
      );
    });

    return <Fragment>{movies}</Fragment>;
  }
}

export default Movies;
