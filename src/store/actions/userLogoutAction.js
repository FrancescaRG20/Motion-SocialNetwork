export const userLogoutAction = token => {
  localStorage.clear();
  return {
    type: "USER_LOGOUT",
    payload: token
  };
};
