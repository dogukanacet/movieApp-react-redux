import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import MovieService from "../../services/MovieService";

import GenreCard from "../../components/GenreCard/GenreCard";
import { Fragment } from "react";

class Genres extends Component {
  state = {
    genres: [],
    error: false,
  };

  componentDidMount() {
    this.getGenreList();
  }

  getGenreList = () => {
    MovieService.getGenreList()
      .then((res) => {
        console.log(res);
        let genresList = res.data.genres;
        this.setState({
          genres: genresList,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
  };

  getGenres = (genreId, genreName) => {
    this.props.history.push("/genres/" + genreName);
  };

  render() {
    let movieGenres = this.state.genres.map((genre) => {
      return (
        <GenreCard
          clicked={() => this.getGenres(genre.id, genre.name)}
          key={genre.id}
          name={genre.name}
        />
      );
    });
    if (this.state.error) {
      movieGenres = <h1 style={{ color: "white" }}>Something went wrong</h1>;
    }
    return <Fragment>{movieGenres}</Fragment>;
  }
}

export default withRouter(Genres);
