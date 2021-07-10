import * as actionType from "./actionTypes";

import axios from "../../services/axios-custom";

export const fetchMovies = (res) => {
  return {
    type: actionType.FETCH_MOVIES,
    movList: res,
  };
};

export const fetchMoviesFailed = () => {
  return {
    type: actionType.FETCH_MOVIES_FAILED,
  };
};

export const initMovies = () => {
  return (dispatch) => {
    axios
      .get(actionType.MovieService.popular + actionType.MovieService.api_key)
      .then((response) => {
        let popularMovies = response.data.results;
        dispatch(fetchMovies(popularMovies));
      })
      .catch((error) => {
        dispatch(fetchMoviesFailed());
      });
  };
};

export const searchMovies = (inputVal) => {
  return (dispatch) => {
    axios
      .get(
        actionType.MovieService.search +
          actionType.MovieService.api_key +
          actionType.MovieService.query +
          inputVal
      )
      .then((res) => {
        let searchedMovies = res.data.results;
        dispatch(fetchMovies(searchedMovies));
      })
      .catch((err) => {
        dispatch(fetchMoviesFailed());
      });
  };
};
