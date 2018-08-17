import React, { Component } from "react";
import { Link } from "react-router-dom";

class StoryShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: this.props.info
    };
  }
  render() {
    const story = this.state.story; //set the story as a alias to make the bottom stuff shorter and more manageble
    // console.log(story); // This will show the information in the console to make sure things are correct.
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
        {/* <Link to={`/story/${this.state.story._id}/edit`}> */}
        <Link to={`/story/edit/${story._id}`}>
          <form>
            <button type="submit">Edit</button>
          </form>
        </Link>
        <Link to={`/story/delete/${story._id}`}>
          <form>
            <button type="submit">Delete</button>
          </form>
        </Link>
        {/* {this.props.isLoggedIn ? 
                    <div>{this.props.story.you}</div>: ''} */}
      </div>
    );
  }
}

export default StoryShow;
