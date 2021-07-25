import * as actionType from "../actions/actionTypes";

const initialState = {
  movieDetails: [],
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_MOVIE_DETAILS:
      return {
        movieDetails: action.details,
        error: false,
      };
    case actionType.REQUEST_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
