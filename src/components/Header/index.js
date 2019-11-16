import React, { Component } from "react";
import Navbar from "./Navbar";
import { withRouter } from "react-router-dom";
import headerlogo from "../../assets/headerlogo.png";
import "./index.css";

class Header extends Component {
  render() {
    if (this.props.location.pathname === "/") {
      return null;
    }
    return (
      <>
        <div className="header-wrapper">
          <div className="header-wrapper-left">
            <div className="header-logo">
              <img className="header-img-logo" alt="img-logo" src={headerlogo} />
              <div>Motion</div>
            </div>
          </div>
          <div className="header-wrapper-right">
            <div className="header-navbar">
              <Navbar />
            </div>
            <br/>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Header);
