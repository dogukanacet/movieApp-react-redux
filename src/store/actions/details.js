import * as actionType from "./actionTypes";

import axios from "../../services/axios-custom";

export const getMovieDetails = (res) => {
  return {
    type: actionType.GET_MOVIE_DETAILS,
    details: res,
  };
};

export const fetchMovieDetails = (movieID) => {
  return (dispatch) =>
    axios
      .get("movie/" + movieID + actionType.MovieService.api_key)
      .then((res) => {
        let movieDetail = res.data;
        console.log(movieDetail)
        dispatch(getMovieDetails(movieDetail));
      })
      .catch((err) => {
        dispatch(requestFailed());
      });
};

export const requestFailed = () => {
  return {
    type: actionType.REQUEST_FAILED,
  };
};
