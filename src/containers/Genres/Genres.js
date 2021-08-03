import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import GenreCard from "../../components/Genres/GenreCard/GenreCard";
import Spinner from "../../components/UI/Spinner/Spinner";

import styles from "./Genres.module.css";

class Genres extends Component {
  componentDidMount() {
    this.props.onInit();
  }

  getGenreMovies = (genreId, genreName) => {
    this.props.history.push("/genres/" + genreName);
    this.props.onClick(genreId, genreName);
  };

  render() {
    let movieGenres = (
      <div>
        <Spinner />;
      </div>
    );

    if (this.props.genresList)
      movieGenres = this.props.genresList.map((genre) => {
        return (
          <GenreCard
            clicked={() => this.getGenreMovies(genre.id, genre.name)}
            key={genre.id}
            name={genre.name}
          />
        );
      });
    if (this.props.error) {
      movieGenres = <h1 style={{ color: "white" }}>Something went wrong</h1>;
    }
    return <div className={styles.GenresContainer}>{movieGenres}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    genresList: state.genres.genresList,
    error: state.genres.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: () => dispatch(actions.fetchGenresList()),
    onClick: (id, name) => dispatch(actions.fetchGenreMovies(id, name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Genres));
