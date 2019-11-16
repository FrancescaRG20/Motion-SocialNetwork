import React, { Component } from "react";
import { connect } from "react-redux";
import { getFeedAction } from "../../store/actions/getFeedAction";
import SingleFeed from "../../components/SingleFeed";
import "./index.css";

class Feed extends Component {
  async componentDidMount() {
    await this.props.dispatch(getFeedAction());
  }

  render() {
    console.log("in the component", this.props.feed);
    return (
      <div className="list-container">
        {this.props.feed
          ? this.props.feed.map(singleFeed => {
              return (
                <div className="feed-wrapper">
                  <SingleFeed key={singleFeed.id} singleFeed={singleFeed} />
                </div>
              );
            })
          : "Loading"}
      </div>
    );
  }
}

// not necessary to connect it with login user reducer, because the getFeedAction will get the token from the state inside the action
const mapStateToProps = ({ getFeedReducer: feed }) => {
  if (feed) console.log(feed);
  return {
    feed: feed.feed
  };
};

export default connect(mapStateToProps)(Feed);
