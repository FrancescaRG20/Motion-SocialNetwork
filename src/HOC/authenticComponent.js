import React, { Component } from "react";
import { connect } from "react-redux";

// component to be passed in the routes and pass Feed as argument
//--> it will return itself, but at that point is like it is retourining the Feed component
export default WrapComponent => {
  class AuthComponent extends Component {
    redirect = () => {
      if (!this.props.authenticated) {
        this.props.history.push("/");
      }
    };

    componentDidMount() {
      this.redirect();
    }

    componentDidUpdate() {
      this.redirect();
    }

    UNSAFE_componentWillUpdate() {
      this.redirect();
    }

    render() {
      return (
        <>
          <WrapComponent {...this.props} />
        </>
      );
    }
  }

  const mapStateToProps = ({ userLoginReducer: { authenticated } }) => {
    console.log(authenticated);
    // (state.loginReducer.authenticated)
    return { authenticated };
  };
  return connect(mapStateToProps)(AuthComponent);
};
