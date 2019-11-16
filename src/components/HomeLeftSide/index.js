import React from "react";
import logo from "../../assets/logo.png";
import "./index.css";

export const HomeLeftSide = () => {
  return (
    <div className="container left">
      <div className="up">
        <img className="logo" alt="logo" src={logo} />
        <h1 className="HomeLeftSide-title">Motion</h1>
        <span className="description">
          Connect with friends and the world around you with Motion.
        </span>
      </div>
    </div>
  );
};
