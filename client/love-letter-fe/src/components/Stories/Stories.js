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
      .get("http://localhost:4000/story/api")
      .then(res => {

        this.setState({
          stories: res.data
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
    return <div>
      <h1>All Stories</h1>
    {showStory}
    
    </div>;
  }
}

export default Story;
