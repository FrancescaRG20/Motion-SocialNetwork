import React from "react";
import { connect } from "react-redux";
import "./index.css";

const SingleFeed = props => {
  console.log("in singlefeed", props);
  return (
    <>
      <div className="single-feed-wrapper">
        <div className="singlefeed">
          <div className="singlefeed-user">
            <strong>{props["singleFeed"].user["username"]} </strong>
          </div>
          <div className="single-feed-content-wrapper">
            <div>
              Title: <em>{props["singleFeed"]["title"]} </em>
            </div>
            <div>{props["singleFeed"]["content"]} </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect()(SingleFeed);
