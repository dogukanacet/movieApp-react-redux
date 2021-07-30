import { Component } from "react";

import MovieService from "../../services/MovieService";

import { connect } from "react-redux";

import styles from "./Details.module.css";

import Poster from "../../components/Details/Poster/Poster";
import Cast from "../../components/Details/Cast/Cast";
import MovieInfo from "../../components/Details/MovieInfo/MovieInfo";
import { Fragment } from "react";

class Details extends Component {
  state = {
    cast: [],
    active: false,
  };

  getCast = (id) => {
    return MovieService.getCast(id).then((res) => {
      this.setState({
        cast: res.data.cast,
      });
    });
  };

  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({
      active: !currentState,
    });
  };

  render() {
    let movieInfos = {
      poster_path: this.props.details.poster_path,
      title: this.props.details.original_title,
      genres: this.props.details.genres,
      release_date: this.props.details.release_date,
      runtime: this.props.details.runtime,
      metascore: this.props.details.vote_average,
      synopsis: this.props.details.overview,
      id: this.props.details.id,
    };

    return (
      <Fragment>
        <Poster path={movieInfos.poster_path} />
        <div
          onClick={this.props.clicked}
          className={
            this.state.active
              ? `${styles.Close} ${styles.active}`
              : styles.Close
          }
        >
          <span aria-hidden="true">&times;</span>
        </div>
        <Cast
          active={this.state.active}
          cast={this.state.cast}
          clicked={() => {
            this.getCast(movieInfos.id);
            this.toggleClass();
          }}
        />
        <MovieInfo infos={movieInfos} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    details: state.details.movieDetails,
  };
};

export default connect(mapStateToProps)(Details);
