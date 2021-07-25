import * as actionType from "./actionTypes";

import axios from "../../services/axios-custom";

export const getPopularMovies = (res) => {
  return {
    type: actionType.GET_POPULAR_MOVIES,
    movList: res,
    title: "Popular Movies",
  };
};

export const initMovies = () => {
  return (dispatch) => {
    axios
      .get(actionType.MovieService.popular + actionType.MovieService.api_key)
      .then((response) => {
        let popularMovies = response.data.results;
        dispatch(getPopularMovies(popularMovies));
      })
      .catch((error) => {
        dispatch(requestFailed());
      });
  };
};

//

export const searchMovie = (res, title) => {
  return {
    type: actionType.SEARCH_MOVIE,
    searchRes: res,
    title: title,
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
        let searchedMovie = res.data.results;
        let title =
          searchedMovie.length < 1 ? null : searchedMovie.length + " Results";

        dispatch(searchMovie(searchedMovie, title));
      })
      .catch((err) => {
        dispatch(requestFailed());
      });
  };
};

//

export const getGenreMovies = (res, genreName) => {
  return {
    type: actionType.GET_GENRE_MOVIES,
    genreMovList: res,
    title: genreName + " Movies",
  };
};

export const fetchGenreMovies = (genreId, genreName) => {
  return (dispatch) => {
    axios
      .get(
        actionType.MovieService.discover +
          actionType.MovieService.api_key +
          actionType.MovieService.genre +
          genreId
      )
      .then((res) => {
        console.log(res);
        let genre = res.data.results;
        dispatch(getGenreMovies(genre, genreName));
      })
      .catch((err) => {
        dispatch(requestFailed());
      });
  };
};

//

export const requestFailed = () => {
  return {
    type: actionType.REQUEST_FAILED,
  };
};
