import axios from "./axios-custom";

import { withRouter } from "react-router-dom";

const MovieService = {
  api_key: "?api_key=6298ebd066f18ba169d303bf2858107d",
  query: "&query=",
  popular: "movie/popular",
  discover: "discover/movie",
  genreList: "genre/movie/list",
  genre: "&with_genres=",
  search: "search/movie",

  getPopularMovies: () => {
    return axios.get(MovieService.popular + MovieService.api_key);
  },

  getGenreList: () => {
    return axios.get(MovieService.genreList + MovieService.api_key);
  },

  getGenre: (genreId) => {
    return axios.get(
      MovieService.discover +
        MovieService.api_key +
        MovieService.genre +
        genreId
    );
  },

  getCast: (movieID) => {
    return axios.get("movie/" + movieID + "/credits" + MovieService.api_key);
  },

  searchMovie: (searchVal) => {
    return axios.get(
      MovieService.search +
        MovieService.api_key +
        MovieService.query +
        searchVal
    );
  },
};

export default withRouter(MovieService);
