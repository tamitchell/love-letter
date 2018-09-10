import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { graphql } from "react-apollo";
import { createStory } from "../../Queries/Queries";
import "./Form.scss";

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
    console.log(this.props.createStory);
    console.log(storyState);
    this.setState(storyState);
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.story);
    this.props.createStory({
      variables: {
        story: this.state.story
      }
    });
    this.props.history.replace("/");
  };

  render() {
    return (
      <div className="">
        <h1>Write A Story</h1>
        <form class="form" onSubmit={this.onSubmit}>
          {/* Title Brick */}
          <div class="row">
            <div class="col s12">
              Title:
              <div class="input-field inline">
                <input
                  id="title"
                  type="text"
                  class="validate"
                  onChange={this.onChange}
                  name="title"
                />
                <label for="title">Story Title</label>
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  This field cannot be empty
                </span>
              </div>
            </div>
          </div>
          {/* Author Brick */}
          <div class="row">
            <div class="col s12">
              Author:
              <div class="input-field inline">
                <input
                  type="text"
                  id="author"
                  onChange={this.onChange}
                  name="author"
                  class="validate"
                />
                <label for="title">Author</label>
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  This field cannot be empty
                </span>
              </div>
            </div>
          </div>
          {/* Tagline Brick */}
          <div class="row">
            <div class="col s12">
              Tagline:
              <div class="input-field inline">
                <input
                  type="text"
                  id="tagline"
                  onChange={this.onChange}
                  name="tagline"
                  class="validate"
                />
                <label for="title">Tagline</label>
              </div>
            </div>
          </div>
          {/* Summary Brick */}
          <div class="row">
            <div class="col s12">
              Summary:
              <div class="input-field inline">
                <textarea
                  type="text"
                  id="summary"
                  onChange={this.onChange}
                  name="summary"
                />
                <label for="title">Summary</label>
              </div>
            </div>
          </div>
          {/* You Brick */}
          <div class="row">
            <div class="col s12">
              Enable your Protagonist: A character is in a zone of comfort
              <div class="input-field inline">
                <textarea
                  type="text"
                  id="you"
                  onChange={this.onChange}
                  name="you"
                />
                <label for="you">
                  Enable your Protagonist: A character is in a zone of comfort
                </label>
              </div>
            </div>
          </div>
          {/* Need Brick */}
          <div class="row">
            <div class="col s12">
              Something Ain't Quite Right:{" "}
              <div class="input-field inline">
                <textarea
                  type="text"
                  id="need"
                  onChange={this.onChange}
                  name="need"
                />
                <label for="need">The character wants something</label>
              </div>
            </div>
          </div>
          {/* Go Brick */}
          <div class="row">
            <div class="col s12">
              Crossing the Threshold:
              <div class="input-field inline">
                <textarea
                  type="text"
                  id="go"
                  onChange={this.onChange}
                  name="go"
                />
                <label for="go">They enter an unfamiliar situation</label>
              </div>
            </div>
          </div>
          {/* Search Brick */}
          <div class="row">
            <div class="col s12">
              The Road of Trials:
              <div class="input-field inline">
                <textarea
                  type="text"
                  id="search"
                  onChange={this.onChange}
                  name="search"
                />
                <label for="search">
                  The character adapts to the unfamiliar
                </label>
              </div>
            </div>
          </div>
          {/* Find Brick */}
          <div class="row">
            <div class="col s12">
              Meeting with the Goddess
              <div class="input-field inline">
                <textarea
                  type="text"
                  id="find"
                  onChange={this.onChange}
                  name="find"
                />
                <label for="find">The character gets what they wanted</label>
              </div>
            </div>
          </div>
          {/* Take Brick */}
          <div class="row">
            <div class="col s12">
              Meet Your Maker:
              <div class="input-field inline">
                <textarea
                  type="text"
                  onChange={this.onChange}
                  id="take"
                  name="take"
                />
                <label for="take">They pay a heavy price</label>
              </div>
            </div>
          </div>
          {/* Return Brick */}
          <div class="row">
            <div class="col s12">
              Meet Your Maker:
              <div class="input-field inline">
                <textarea
                  type="text"
                  id="returned"
                  name="returned"
                  onChange={this.onChange}
                />
                <label for="returned">
                  They return to their familiar situation
                </label>
              </div>
            </div>
          </div>
          {/* Change Brick */}
          <div class="row">
            <div class="col s12">
              Master of Both Worlds:
              <div class="input-field inline">
                <textarea
                  type="text"
                  id="changed"
                  name="changed"
                  onChange={this.onChange}
                />
                <label for="returned">
                  The character has changed in someway{" "}
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <input type="submit" value="Write Story" />
        </form>
      </div>
    );
  }
}

// export default graphql(createStory, {name: 'createStory'})(Form)

const createStoryMutation = graphql(createStory, {
  name: "createStory" // name of the injected prop: this.props.createStory...
})(Form);

export default withRouter(createStoryMutation);
