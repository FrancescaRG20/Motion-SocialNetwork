import React, { Component } from "react";
import { connect } from "react-redux";
import { userLoginAction } from "../../../store/actions/userLoginAction";
import { withRouter } from "react-router-dom";

class SignIn extends Component {
  state = {
    username: "Francesca_Superuser",
    password: "superuser"
  };

  onChangeHandler = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  login = async event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const data = await dispatch(userLoginAction(this.state));
    if (data) {
      this.props.history.push("/feed");
    }
  };

  render() {
    return (
      <>
        <div className="home-container-right">
          <p className="home-title">Sign In</p>
          <form>
            <span className="home-form">
              <div className="home-username-form">
                <input
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="home-password-form">
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangeHandler}
                />
              </div>
              <br />

              <button
                className="home-signin-signup-button"
                onClick={this.login}
              >
                Sign In
              </button>
            </span>
          </form>
          <div className="home-account">
            <div>Don't have an account yet? </div>
            <button
              className="home-signup-button"
              onClick={this.props.handleSignUp}
            >
              {" "}
              Sign Up{" "}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(connect()(SignIn));
