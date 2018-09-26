import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase.js";

class StoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {}
    };
  }
  componentDidMount() {
    const ref = firebase.database().ref("items");
    ref
      .child(this.props.match.params.id)
      .once("value")
      .then(snapshot => this.setState({ story: snapshot.val() }))
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      }));
  }
  render() {
    const story = this.state.story;
    return (
      <Fragment>
        <div className="home-browse">
          <img src={require("../img/fox_moon.png")} alt="Fox and moon logo" />
          <span className="card-panel">
            <h6>{story.title} by {story.author}</h6>
            <p className="summary"><em>{story.summary}</em></p>
            <p className="properties">
              Rating: {story.rating} | Genre: {story.genre} |Language:{" "}
              {story.language}
            </p>
          </span>
        </div>
        <div className="wrapper">
        <div className="story-content">
          <p>{story.you}</p>
          <p>{story.need}</p>
          <p>{story.go}</p>
          <p>{story.search}</p>
          <p>{story.find}</p>
          <p>{story.take}</p>
          <p>{story.returned}</p>
          <p>{story.changed}</p>
          <Link
            to={{
              pathname: `/story/edit/${this.props.match.params.id}`
            }}
          >
            <button className="btn toast-btn" type="submit">Edit</button>
          </Link>
        </div>
        </div>
      </Fragment>
    );
  }
}

export default StoryItem;
