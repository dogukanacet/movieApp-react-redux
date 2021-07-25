import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Details from "../Details/Details";
import MovieCard from "../../components/Movies/MovieCard/MovieCard";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";

class Movies extends Component {
  state = {
    showDetails: false,
  };

  componentDidMount() {
    if (!this.props.movies) {
      this.props.OnStartup();
    }
  }

  showDetails = (id) => {
    this.props.OnClick(id);
    this.setState({
      showDetails: true,
    });
  };

  closeDetails = () => {
    this.setState({
      showDetails: false,
    });
  };

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
            clicked={() => this.showDetails(movie.id)}
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
        {this.state.showDetails ? (
          <Modal>
            <Details clicked={this.closeDetails} />
          </Modal>
        ) : null}
        <div>
          <h1
            style={{
              position: "sticky",
              width: "70vw",
              color: "white",
              textAlign: "center",
            }}
          >
            {this.props.title}
          </h1>
        </div>
        {movies}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movieList,
    title: state.movies.title,
    error: state.movies.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    OnStartup: () => dispatch(actions.initMovies()),
    OnClick: (id) => dispatch(actions.fetchMovieDetails(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
