const initialState = {
  feed: null
};

export const getFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_FEED": {
      return {
        ...state,
        feed: action.payload
      };
    }
    default:
      return state;
  }
};
