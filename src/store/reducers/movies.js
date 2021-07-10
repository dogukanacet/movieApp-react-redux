import * as actionType from "../actions/actionTypes";

const initialState = {
  movieList: null,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_MOVIES:
      return {
        ...state,
        error: false,
        movieList: action.movList,
      };
    case actionType.FETCH_MOVIES_FAILED:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default reducer;
