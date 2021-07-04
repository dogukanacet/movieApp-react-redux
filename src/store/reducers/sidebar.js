import * as actionType from "../actions/actionTypes";

const initialState = {
  error: false,
  searchValue: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
