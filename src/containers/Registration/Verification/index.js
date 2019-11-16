import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { baseUrl } from "../../../store/constants";
import { userLoginAction } from "../../../store/actions/userLoginAction";

class SignIn extends Component {
  state = {
    validation_code: "",
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: ""
  };

  onChangeHandler = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  userSendValidationDetails = async data => {
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    const body = JSON.stringify(data);
    const config = {
      headers,
      body,
      method: "POST"
    };

    const response = await fetch(`${baseUrl}/registration/validation`, config);
    const code = await response.json();
    return code;
  };

  login = async event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const data = await dispatch(userLoginAction(this.state));
    if (data) {
      this.props.history.push("/feed");
    }
  };

  signup = async event => {
    event.preventDefault();
    await this.userSendValidationDetails(this.state);
    this.props.history.push("/feed");
  };

  render() {
    return (
      <>
        <div className="home-container-right">
          <p className="home-title">Verification</p>
          <form>
            <span className="home-form">
              <div className="home-validationcode-form">
                <input
                  placeholder="Validation code"
                  type="text"
                  name="validation_code"
                  value={this.state.validation_code}
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="home-email-form">
                <input
                  placeholder="Email"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="home-username-form">
                <input
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="home-firstname-form">
                <input
                  placeholder="First name"
                  type="text"
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="home-lastname-form">
                <input
                  placeholder="Last name"
                  type="text"
                  name="last_name"
                  value={this.state.last_name}
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
              <div className="home-password-form">
                <input
                  placeholder="Confirm password"
                  type="password"
                  name="password_confirmation"
                  value={this.state.password_confirmation}
                  onChange={this.onChangeHandler}
                />
              </div>
              <br />
              <button
                className="home-signin-signup-button"
                onClick={event => this.signup(event)}
              >
                Complete
              </button>
            </span>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(connect()(SignIn));
