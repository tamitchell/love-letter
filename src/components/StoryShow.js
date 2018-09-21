import React, { Component } from "react";
import { Link } from "react-router-dom";

class StoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: this.props.location.myCustomProps
    };
  }
  componentDidMount() {
    //this should do a fetch request based on the 
    //params id to get the specific item in the firebase
    //right now it is being passed as prop which is unreliable

    //user should be able to access content 
    //without having to go to previous page
  }
  render() {
    const story = this.state.story.story;
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
          <form>
            <button type="submit">Edit</button>
          </form>
        </Link>
      </div>
    );
  }
}

export default StoryItem;
