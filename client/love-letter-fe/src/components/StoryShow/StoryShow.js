import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

class StoryShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: this.props.info
    };
  }
  render() {
    const story = this.state.story; 
    return (
      <div>
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
        <Link to={`/story/edit/${story._id}`}>
          <form>
            <button type="submit">Edit</button>
          </form>
        </Link>
      </div>
    );
  }
}

export default StoryShow;
