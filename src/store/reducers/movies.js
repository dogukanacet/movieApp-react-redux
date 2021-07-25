import * as actionType from "../actions/actionTypes";

const initialState = {
  movieList: null,
  title: null,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_POPULAR_MOVIES:
      return {
        ...state,
        movieList: action.movList,
        title: action.title,
        error: false,
      };

    case actionType.GET_GENRE_MOVIES:
      return {
        ...state,
        movieList: action.genreMovList,
        title: action.title,
        error: false,
      };

    case actionType.SEARCH_MOVIE:
      return {
        ...state,
        movieList: action.searchRes,
        title: action.title,
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
