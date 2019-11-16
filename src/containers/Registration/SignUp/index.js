import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { baseUrl } from "../../../store/constants";

class SignUp extends Component {
  state = {
    email: ""
  };

  onChangeHandler = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  userSendEmail = async data => {
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    const body = JSON.stringify(data);
    const config = {
      headers,
      body,
      method: "POST"
    };

    const response = await fetch(`${baseUrl}/registration/`, config);
    const code = await response.json();
    return code;
  };

  signup = async event => {
    event.preventDefault();
    await this.userSendEmail(this.state);
    this.props.handleCongratulations();
  };

  render() {
    return (
      <>
        <div className="home-container-right">
          <p className="home-title">Sign Up</p>
          <form>
            <span className="home-form">
              <div className="home-email-form">
                <input
                  placeholder="Email"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChangeHandler}
                />
              </div>
              <br />
              <button
                className="home-signin-signup-button"
                onClick={event => this.signup(event)}
              >
                Sign Up
              </button>
            </span>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(connect()(SignUp));
