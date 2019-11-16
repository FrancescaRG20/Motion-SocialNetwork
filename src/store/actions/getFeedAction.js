import { baseUrl } from "../constants";

export const getFeed = feed => ({
  type: "GET_ALL_FEED",
  payload: feed
});

export const getFeedAction = () => async (dispatch, getState) => {
  console.log("Get feed action");
  let { token } = getState().userLoginReducer;
  console.log(token);
  if (!token) {
    token = localStorage.getItem("token");
  }

  const headers = new Headers({
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`
  });

  const config = {
    headers,
    methos: "GET"
  };

  const response = await fetch(`${baseUrl}/posts/feed`, config);
  const feed = await response.json();
  dispatch(getFeed(feed));
  console.log(feed);
  return feed;
};
