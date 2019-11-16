import { baseUrl } from "../constants";

export const userLogin = token => ({
  type: "USER_LOGIN_SUCCESS",
  payload: token
});

export const userLoginAction = data => async dispatch => {
  const headers = new Headers({
    "Content-Type": "application/json"
  });
  const body = JSON.stringify(data);
  const config = {
    headers,
    body,
    method: "POST"
  };

  const response = await fetch(`${baseUrl}/token/`, config);
  const user = await response.json();

  const token = user.access;
  if (token) {
    localStorage.setItem("token", token); // save the token in the browser local storage
    dispatch(userLogin(token));
    return token;
  }
};
