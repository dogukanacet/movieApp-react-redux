import axios from "./axios-custom";

const MovieService = {
  getPopularMovies: () => {
    return axios.get("movie/popular?api_key=6298ebd066f18ba169d303bf2858107d");
  },
};

export default MovieService;
