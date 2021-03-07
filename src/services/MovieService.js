import axios from "./axios-custom";

import { withRouter } from "react-router-dom";

const MovieService = {
  api_key: "?api_key=6298ebd066f18ba169d303bf2858107d",
  query: "&query=",
  popular: "movie/popular",
  search: "search/movie",

  getPopularMovies: () => {
    return axios.get(MovieService.popular + MovieService.api_key);
  },

  searchMovie: (params) => {
    return axios.get(
      MovieService.search + MovieService.api_key + MovieService.query + params
    );
  },
};

export default withRouter(MovieService);
