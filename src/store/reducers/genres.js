import * as actionType from "../actions/actionTypes";

const initialState = {
  genresList: null,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_GENRES_LIST:
      return {
        genresList: action.genresList,
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
