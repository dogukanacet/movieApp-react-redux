import React, { Component, Fragment } from "react";

import MovieService from "../../services/MovieService";

import styles from "./Movies.module.css";

import MovieCards from "../../components/MovieCards/MovieCards";
import Spinner from "../../components/UI/Spinner/Spinner";

class Movies extends Component {
  state = {
    movies: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    MovieService.getPopularMovies().then((res) => {
      let popularMovies = res.data.results;
      console.log(popularMovies);
      this.setState({
        movies: popularMovies,
        loading: false,
      });
    });

    // let popularMovies = axios.getPopularMovies();
    // this.setState({
    //   movies: popularMovies,
    // });
  }

  render() {
    let movies = this.state.movies.map((movie) => {
      return (
        <MovieCards
          key={movie.id}
          title={movie.title}
          poster={movie.poster_path}
        />
      );
    });
    if (this.state.loading) {
      movies = (
        <div style={{ width: "75vw" }}>
          <Spinner />;
        </div>
      );
    }

    return <Fragment>{movies}</Fragment>;
  }
}

export default Movies;
