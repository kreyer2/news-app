const initialState = {
  news: [],
  isLoaded: false,
  isError: false
};

export function newsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_NEWS":
      return {
        ...state,
        news: action.data
      };
    case "IS_LOADED":
      return {
        ...state,
        isLoaded: action.bool
      }
    case "IS_ERROR":
      return {
        ...state,
        isError: action.bool
      }
    default:
      return state;
  }
}