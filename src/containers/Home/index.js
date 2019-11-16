import React, { Component } from "react";
import "./index.css";
import { HomeLeftSide } from "../../components/HomeLeftSide";
import SignIn from "../Registration/SignIn";
import SignUp from "../Registration/SignUp";
import Congratulations from "../Registration/Congratulations";
import Verification from "../Registration/Verification";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    show: "signin"
  };

  handleSignUp = () => {
    this.setState({
      show: "signup"
    });
  };

  handleCongratulations = () => {
    this.setState({
      show: "congratulations"
    });
  };

  handleVerification = () => {
    this.setState({
      show: "verification"
    });
  };



  render() {
    return (
      <>
        <div className="home-container">
          <HomeLeftSide />
          <div className="home-container-right">
            {this.state.show === "signin" && (
              <SignIn handleSignUp={this.handleSignUp} />
            )}
            {this.state.show === "signup" && (
              <SignUp handleCongratulations={this.handleCongratulations} />
            )}
            {this.state.show === "congratulations" && (
              <Congratulations handleVerification={this.handleVerification} />
            )}
            {this.state.show === "verification" && <Verification />}
          </div>
        </div>
      </>
    );
  }
}

export default connect()(Home);
