import * as actionType from "./actionTypes";

import axios from "../../services/axios-custom";

export const getGenresList = (res) => {
  return {
    type: actionType.FETCH_GENRES_LIST,
    genresList: res,
  };
};

export const fetchGenresList = () => {
  return (dispatch) =>
    axios
      .get(actionType.MovieService.genreList + actionType.MovieService.api_key)
      .then((res) => {
        let genresList = res.data.genres;
        dispatch(getGenresList(genresList));
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
