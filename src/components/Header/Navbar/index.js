import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import posts_logo from "../../../assets/images/posts_logo.png";
import { userLogoutAction } from "../../../store/actions/userLogoutAction";
import "./index.css";
class Navbar extends Component {
  logout = async event => {
    event.preventDefault();
    const { dispatch } = this.props;
    await dispatch(userLogoutAction(this.props.token));
  };

  renderHeaderLogin = () => {
    return (
      <>
        <img className="navbar-posts-logo" src={posts_logo} alt="posts_logo" />
        <button className="navbar-posts-button">
          <NavLink className="navbar-text-posts" to="/feed">
            Posts
          </NavLink>
        </button>
        <button className="navbar-sign-button">
          <NavLink className="navbar-text" to="/">
            Sign In
          </NavLink>
        </button>
      </>
    );
  };

  renderHeaderLogout = () => {
    return (
      <>
        <button className="navbar-posts-button">
          <img src={posts_logo} alt="posts_logo" />
          <NavLink className="navbar-text-posts" to="/feed">
            Posts
          </NavLink>
        </button>
        <button className="navbar-sign-button" onClick={this.logout}>
        
            Sign Out

        </button>
      </>
    );
  };

  render() {
    return this.props.authenticated
      ? this.renderHeaderLogout()
      : this.renderHeaderLogin();
  }
}

const mapStateToProps = ({ userLoginReducer: { token, authenticated } }) => {
  console.log(authenticated);
  return { token, authenticated };
};

export default connect(mapStateToProps)(Navbar);
