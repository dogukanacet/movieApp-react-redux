import * as actionType from "./actionTypes";

export const fetchMovies = () => {
  return {
    type: actionType.FETCH_MOVIES,
  };
};
