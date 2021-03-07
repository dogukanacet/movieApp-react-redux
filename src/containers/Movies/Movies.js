import React, { Component, Fragment } from "react";

import MovieService from "../../services/MovieService";
import { withRouter } from "react-router-dom";

import styles from "./Movies.module.css";

import MovieCards from "../../components/MovieCards/MovieCards";
import Spinner from "../../components/UI/Spinner/Spinner";

class Movies extends Component {
  state = {
    movies: [],
    loading: false,
    error: false,
    notFound: false,
  };

  componentDidMount() {
    this.getPopularMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.searched) {
      if (prevProps.searched != this.props.searched) {
        this.getPopularMovies();
      }
    }
    if (this.props.searched) {
      if (prevProps.searched != this.props.searched) {
        let query = new URLSearchParams(this.props.searched);
        this.setState({
          searched: query,
        });
      }
    }
    if (this.state.searched) {
      if (prevState.searched != this.state.searched) {
        this.searchMovies();
      }
    }
  }

  searchMovies = () => {
    this.setState({ loading: true });
    MovieService.searchMovie(this.state.searched)
      .then((res) => {
        let searchedMovies = res.data.results;
        console.log(searchedMovies);
        this.setState({
          notFound: false,
          movies: searchedMovies,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
  };

  getPopularMovies = () => {
    this.setState({ loading: true });
    MovieService.getPopularMovies()
      .then((res) => {
        let popularMovies = res.data.results;
        this.setState({
          notFound: false,
          movies: popularMovies,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
  };

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

    if (this.state.error) {
      movies = (
        <h1 style={{ width: "80vw", color: "white" }}>Something went wrong</h1>
      );
    }

    if (this.state.movies.length < 1) {
      movies = (
        <h1 style={{ width: "80vw", color: "white" }}>Movie not found</h1>
      );
    }
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
