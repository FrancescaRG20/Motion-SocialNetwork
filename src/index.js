import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { userLogin } from "./store/actions/userLoginAction";
import store from "./store";
import "./index.css";
import App from "../src/components/App";
import * as serviceWorker from "./serviceWorker";

// first check to see if the user ever logged in before (if yes, his token is already in the localStorage)
const token = localStorage.getItem("token");
if (token) {
  store.dispatch(userLogin(token));
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
