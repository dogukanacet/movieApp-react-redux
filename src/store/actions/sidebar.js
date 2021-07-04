import * as actionType from "./actionTypes";

export const searchMovies = (input) => {
  return {
    type: actionType.SEARCH_MOVIES,
    searchVal: input,
  };
};
