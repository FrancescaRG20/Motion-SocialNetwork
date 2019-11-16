import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SignUp extends Component {
  onChangeHandler = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <>
        <div className="home-container-right">
          <p className="home-title">Congratulations!</p>
          <form>
            <span className="home-form">
              <div className="home-congratulations-text">
                We've sent a confirmation code to your email
              </div>
              <br />

              <button
                className="home-signin-signup-button"
                onClick={this.props.handleVerification}
              >
                Continue
              </button>
            </span>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(connect()(SignUp));
