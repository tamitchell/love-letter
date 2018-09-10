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
      <div className="form-container">
        <h1>Write A Story</h1>
        <form className="form" onSubmit={this.onSubmit}>
          {/* Title Brick */}
          <div className="row header-row">
            <div className="col s12 m6 l6">
              Title:
              <p className="input-field">
                <input
                  id="title"
                  type="text"
                  class="validate"
                  onChange={this.onChange}
                  name="title"
                />
                <label htmlFor="title">Story Title</label>
                <span
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  This field cannot be empty
                </span>
              </p>
            </div>

            {/* Author Brick */}

            <div className="col s12 m6 l6">
              Author:
              <p className="input-field">
                <input
                  type="text"
                  id="author"
                  onChange={this.onChange}
                  name="author"
                  class="validate"
                />
                <label htmlFor="author">Author</label>
                <span
                  class="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  This field cannot be empty
                </span>
              </p>
            </div>

            {/* Tagline Brick */}

            <div className="col s12 m12 l12">
              Tagline:
              <p className="">
                <input
                  type="text"
                  id="tagline"
                  onChange={this.onChange}
                  name="tagline"
                  class="validate"
                />
                <label htmlFor="tagline">Tagline</label>
              </p>
            </div>
          </div>

          {/* Summary Brick */}
          <div className="row">
            <div className="col s12 l12">
              <div className="card orange accent-3 col s12 m5 l5">
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Summary
                    <i className="material-icons right">more_vert</i>
                  </span>
                </div>
                <div className="card-reveal orange accent-3">
                  <span class="card-title grey-text text-darken-4">
                    <i class="material-icons right">close</i>
                  </span>{" "}
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>

              <p className="input-field col s12 m7 l7">
                <textarea
                  type="text"
                  id="summary"
                  onChange={this.onChange}
                  name="summary"
                />
                <label htmlFor="title">Summary</label>
              </p>
            </div>
          </div>
          {/* You Brick */}
          <div className="row">
            <div className="col s12">
              <div class="card orange accent-3 col s12 m5 l5">
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Establish a Protagonist
                    <i class="material-icons right">more_vert</i>
                  </span>
                </div>
                <div class="card-reveal orange accent-3">
                  <span class="card-title grey-text text-darken-4">
                    <i class="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>

              <p className="input-field col s12 m7 l7">
                <textarea
                  type="text"
                  id="you"
                  onChange={this.onChange}
                  name="you"
                />
                <label htmlFor="you">
                  Enable your Protagonist: A character is in a zone of comfort
                </label>
              </p>
            </div>
          </div>
          {/* Need Brick */}
          <div className="row">
            <div className="col s12">
              <div className="card orange accent-3 col s12 m5 l5">
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Somethin' Aint Quite Right
                    <i className="material-icons right">more_vert</i>
                  </span>
                </div>
                <div className="card-reveal orange accent-3">
                  <span className="card-title grey-text text-darken-4">
                    Somethin' Aint Quite Right
                    <i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>

              <p className="input-field col s12 m7 l7">
                <textarea
                  type="text"
                  id="need"
                  onChange={this.onChange}
                  name="need"
                />
                <label htmlFor="need">The character wants something</label>
              </p>
            </div>
          </div>
          {/* Go Brick */}
          <div className="row">
            <div className="col s12">
              <div className="card  orange accent-3 col s12 m5 l5">
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Crossing the Threshold
                    <i className="material-icons right">more_vert</i>
                  </span>
                </div>
                <div className="card-reveal orange accent-3">
                  <span className="card-title grey-text text-darken-4">
                    Crossing the Threshold
                    <i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>

              <p className="input-field col s12 m7 l7">
                <textarea
                  type="text"
                  id="go"
                  onChange={this.onChange}
                  name="go"
                />
                <label htmlFor="go">They enter an unfamiliar situation</label>
              </p>
            </div>
          </div>
          {/* Search Brick */}
          <div className="row">
            <div className="col s12">
              <div className="card orange accent-3 col s12 m5 l5">
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    The Road of Trials
                    <i className="material-icons right">more_vert</i>
                  </span>
                </div>
                <div className="card-reveal orange accent-3">
                  <span className="card-title grey-text text-darken-4">
                    The Road of Trials
                    <i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>

              <p className="input-field col s12 m7 l7">
                <textarea
                  type="text"
                  id="search"
                  onChange={this.onChange}
                  name="search"
                />
                <label htmlFor="search">
                  The character adapts to the unfamiliar
                </label>
              </p>
            </div>
          </div>
          {/* Find Brick */}
          <div className="row">
            <div className="col s12">
              <div className="card orange accent-3 col s12 m5 l5">
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Meeting the Goddess
                    <i className="material-icons right">more_vert</i>
                  </span>
                </div>
                <div className="card-reveal orange accent-3">
                  <span className="card-title grey-text text-darken-4">
                    Meeting the Goddess
                    <i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>

              <p className="input-field col s12 m7 l7">
                <textarea
                  type="text"
                  id="find"
                  onChange={this.onChange}
                  name="find"
                />
                <label htmlFor="find">
                  The character gets what they wanted
                </label>
              </p>
            </div>
          </div>
          {/* Take Brick */}
          <div className="row">
            <div className="col s12">
              <div className="card orange accent-3 col s12 m5 l5">
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Meet Your Maker
                    <i className="material-icons right">more_vert</i>
                  </span>
                </div>
                <div className="card-reveal orange accent-3">
                  <span className="card-title grey-text text-darken-4">
                    Meet Your Maker
                    <i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
              <p className="input-field col s12 m7 l7">
                <textarea
                  type="text"
                  onChange={this.onChange}
                  id="take"
                  name="take"
                />
                <label htmlFor="take">They pay a heavy price</label>
              </p>
            </div>
          </div>
          {/* Return Brick */}
          <div className="row">
            <div className="col s12">
              <div className="card orange accent-3 col s12 m5 l5">
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Bringing It Home
                    <i className="material-icons right">more_vert</i>
                  </span>
                </div>
                <div className="card-reveal orange accent-3">
                  <span className="card-title grey-text text-darken-4">
                    Bringing It Home
                    <i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>

              <p class="input-field col s12 m7 l7">
                <textarea
                  type="text"
                  id="returned"
                  name="returned"
                  onChange={this.onChange}
                />
                <label htmlFor="returned">
                  They return to their familiar situation
                </label>
              </p>
            </div>
          </div>
          {/* Change Brick */}
          <div className="row">
            <div className="col s12">
              <div className="card orange accent-3 col s12 m5 l5">
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Master of Both Worlds
                    <i className="material-icons right">more_vert</i>
                  </span>
                </div>
                <div className="card-reveal orange accent-3">
                  <span className="card-title grey-text text-darken-4">
                    Master of Both Worlds
                    <i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
              <p className="input-field col s12 m7 l7">
                <textarea
                  type="text"
                  id="changed"
                  name="changed"
                  onChange={this.onChange}
                />
                <label htmlFor="returned">
                  The character has changed in someway{" "}
                </label>
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button class="waves-effect waves-light btn-large" type="submit">
            Publish
          </button>
        </form>
      </div>
    );
  }
}

const createStoryMutation = graphql(createStory, {
  name: "createStory" // name of the injected prop: this.props.createStory...
})(Form);

export default withRouter(createStoryMutation);
