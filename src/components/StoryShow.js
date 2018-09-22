import React, { Component } from "react";
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
      .then(snapshot => this.setState({story: snapshot.val()}))
      .catch(error => ({
         errorCode: error.code,
         errorMessage: error.message
       }));
  }
  render() {
    const story = this.state.story;
    return (
      <div>
        <h1>Whole Story</h1>
        <p>{story.title}</p>
        <p>{story.author}</p>
        <p>{story.you}</p>
        <p>{story.need}</p>
        <p>{story.go}</p>
        <p>{story.search}</p>
        <p>{story.find}</p>
        <p>{story.take}</p>
        <p>{story.return}</p>
        <p>{story.changed}</p>
        <Link to={{
          pathname: `/story/edit/${story.key}`,
          myCustomProps: {story}
          }}>
            <button type="submit">Edit</button>
        </Link>
      </div>
    );
  }
}

export default StoryItem;
