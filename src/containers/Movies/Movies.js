import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import * as actionType from "../../store/actions";

import MovieService from "../../services/MovieService";

import MovieCard from "../../components/MovieCard/MovieCard";
import Spinner from "../../components/UI/Spinner/Spinner";

class Movies extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    this.props.OnStartup();
  }

  componentDidUpdate(prevProps) {
    if (!this.props.searchVal) {
      if (prevProps.searchVal != this.props.searchVal) {
        this.props.OnStartup();
      }
    }

    if (this.props.searchVal) {
      if (prevProps.searchVal != this.props.searchVal) {
        this.searchMovies();
      }
    }
  }

  // searchMovies = () => {
  //   this.setState({ loading: true });
  //   MovieService.searchMovie(this.props.searchVal)
  //     .then((res) => {
  //       let searchedMovies = res.data.results;
  //       this.setState({
  //         movies: searchedMovies,
  //         loading: false,
  //         error: false,
  //       });
  //     })
  //     .catch((err) => {
  //       this.setState({
  //         error: true,
  //       });
  //     });
  // };

  render() {
    let movies = this.props.movies.map((movie) => {
      return (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster={movie.poster_path}
        />
      );
    });

    if (this.state.error) {
      movies = <h1 style={{ color: "white" }}>Something went wrong</h1>;
    }

    if (this.props.movies.length < 1) {
      movies = <h1 style={{ color: "white" }}>Movie not found</h1>;
    }
    if (this.state.loading) {
      movies = (
        <div>
          <Spinner />;
        </div>
      );
    }

    return <Fragment>{movies}</Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    searchVal: state.searchValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    OnStartup: () => dispatch({ type: actionType.FETCH_MOVIES }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
