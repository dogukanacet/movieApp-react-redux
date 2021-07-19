import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import MovieCard from "../../components/MovieCard/MovieCard";
import Spinner from "../../components/UI/Spinner/Spinner";

class Movies extends Component {
  componentDidMount() {
    this.props.OnStartup();
  }

  render() {
    let movies = (
      <div>
        <Spinner />;
      </div>
    );

    if (this.props.movies) {
      movies = this.props.movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={movie.poster_path}
          />
        );
      });
      if (this.props.movies.length < 1) {
        movies = <h1 style={{ color: "white" }}>Movie not found</h1>;
      }
    }

    if (this.props.error) {
      movies = <h1 style={{ color: "white" }}>Something went wrong</h1>;
    }

    return (
      <Fragment>
        <h1 style={{ width: "70vw", color: "white", textAlign: "center" }}>
          {this.props.title}
        </h1>
        {movies}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movieList,
    title: state.title,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    OnStartup: () => dispatch(actions.initMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
