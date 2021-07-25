import { Component } from "react";

import { connect } from "react-redux";

import styles from "./Details.module.css";

import Poster from "../../components/Details/Poster/Poster";
import Cast from "../../components/Details/Cast/Cast";
import MovieInfo from "../../components/Details/MovieInfo/MovieInfo";
import { Fragment } from "react";

class Details extends Component {
  render() {
    let movieInfos = {
      title: this.props.details.original_title,
      genres: this.props.details.genres.map((genre) => {
        return genre.name;
      }),
      release_date: this.props.details.release_date,
      runtime: this.props.details.runtime,
      metascore: this.props.details.vote_average,
      synopsis: this.props.details.overview,
    };

    return (
      <Fragment>
        <Poster path={this.props.details.poster_path} />
        <div onClick={this.props.clicked} className={styles.Close}>
          <span aria-hidden="true">&times;</span>
        </div>
        <Cast />
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
