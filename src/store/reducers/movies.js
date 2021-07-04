import * as actionType from "../actions/actionTypes";

const initialState = {
  movieList: [
    {
      id: 508943,
      title: "Luca",
      poster_path: "/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
    },
  ],
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_MOVIES:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
