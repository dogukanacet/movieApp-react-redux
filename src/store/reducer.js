import * as actionType from "./actions";

const initialState = {
  movies: [
    {
      id: 508943,
      title: "Luca",
      poster_path: "/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
    },
  ],
  error: false,
  searchValue: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_MOVIES:
      return {
        ...state,
      };

    case actionType.SEARCH_MOVIES:
      return {
        ...state,
        searchValue: action.searchVal,
      };

    default:
      return state;
  }
};

export default reducer;
