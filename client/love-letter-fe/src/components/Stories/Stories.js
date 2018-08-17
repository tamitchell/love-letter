import React, { Component } from "react";
import axios from "axios";
import StoryShow from "../StoryShow/StoryShow";

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/story/api")
      .then(res => {
        console.log(res.data);
          const newList = res.data;
        this.setState({
          stories: newList
          // stories: this.state.stories.push(res.data)
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    let showStory = this.state.stories.map(story => {
      return (
        <div key={story._id}>
          <StoryShow info={story} />
        </div>
      );
    });
    return <div>{showStory}</div>;
  }
}

export default Story;
