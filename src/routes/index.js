import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../containers/Home";
import Feed from "../containers/Feed";
import AuthComponent from "../HOC/authenticComponent";

class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Home} />
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/feed" component={AuthComponent(Feed)} />
      </>
    );
  }
}

export default Routes;
