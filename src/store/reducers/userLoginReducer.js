const initialState = {
  token: null,
  authenticated: null
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS": {
      return {
        ...state,
        token: action.payload,
        authenticated: true
      };
    }
    case "USER_LOGOUT": {
      console.log("user logged out");
      // localStorage.clear(); this cannot happen here, reducers are pure functions, cannot have side effects
      return {
        ...state,
        token: null,
        authenticated: null
      };
    }
    default:
      return state;
  }
};
