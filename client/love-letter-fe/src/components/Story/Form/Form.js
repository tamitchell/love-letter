import React, { Component } from "react"
import { withRouter } from 'react-router-dom'
import  {graphql}  from 'react-apollo'
import {createStory} from '../../Queries/Queries'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {}
    };
  }

  onChange = e => {
    const storyState = this.state.story;
    storyState[e.target.name] = e.target.value;
    console.log(this.props.createStory)
    console.log(storyState)
    this.setState(storyState);
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.story)
    this.props.createStory({
      variables: {
        story: this.state.story
      }
    })
    this.props.history.replace('/')
  };

  render() {
    return (
      <div className="card">
        <h1>Write A Story</h1>
        <form onSubmit={this.onSubmit}>
          <div className="">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={this.onChange}
              name="title"
              placeholder="from"
            />
          </div>

              <div className="">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              onChange={this.onChange}
              name="author"
              placeholder="Author"
            />
          </div>

              <div className="">
            <label htmlFor="tagline">Tagline</label>
            <input
              type="text"
              id="tagline"
              onChange={this.onChange}
              name="tagline"
              placeholder="tagline"
            />
          </div>

          <div className="">
            <label htmlFor="summary">Summary</label>
            <input
              type="text"
              id="summary"
              onChange={this.onChange}
              name="summary"
              placeholder="summary"
            />
          </div>

          <div className="">
            <label htmlFor="you">
              Enable your Protagonist: A character is in a zone of comfort
            </label>
            <input
              type="text"
              id="you"
              onChange={this.onChange}
              name="you"
              placeholder=" A character is in a zone of comfort"
            />
          </div>

          <div className="">
            <label htmlFor="need">Something Ain't Quite Right:</label>
            <input
              type="text"
              id="need"
              onChange={this.onChange}
              name="need"
              placeholder="The character wants something"
            />
          </div>

          <div className="">
            <label htmlFor="go">Crossing the Threshold:</label>
            <input
              type="text"
              id="go"
              onChange={this.onChange}
              name="go"
              placeholder="They enter an unfamiliar situation"
            />
          </div>

          <div className="">
            <label htmlFor="search">The Road of Trials:</label>
            <input
              type="text"
              id="search"
              onChange={this.onChange}
              name="search"
              placeholder="The character adapts to the unfamiliar"
            />
          </div>

          <div className="">
            <label htmlFor="find">Meeting with the Goddess</label>
            <input
              type="text"
              id="find"
              onChange={this.onChange}
              name="find"
              placeholder="The character gets what they wanted"
            />
          </div>

          <div className="">
            <label htmlFor="take">The Road of Trials:</label>
            <input
              type="text"
              id="take"
              onChange={this.onChange}
              name="take"
              placeholder="They pay a heavy price"
            />
          </div>

          <div className="">
            <label htmlFor="take">Meet Your Maker:</label>
            <input
              type="text"
              onChange={this.onChange}
              id="take"
              name="take"
              placeholder="They pay a heavy price"
            />
          </div>

          <div className="">
            <label htmlFor="returned">Bringing It Home:</label>
            <input
              type="text"
              id="returned"
              name="returned"
              onChange={this.onChange}
              placeholder="They return to their familiar situation"
            />
          </div>

          <div className="">
            <label htmlFor="changed">Master of Both Worlds:</label>
            <input
              type="text"
              id="changed"
              name="changed"
              onChange={this.onChange}
              placeholder="The character has changed in someway"
            />
          </div>

          <input type="submit" value="Write Story" />
        </form>
      </div>
    );
  }
}


// export default graphql(createStory, {name: 'createStory'})(Form)

const createStoryMutation = graphql(createStory, {
  name: 'createStory' // name of the injected prop: this.props.createStory...
})(Form)

export default withRouter(createStoryMutation)
