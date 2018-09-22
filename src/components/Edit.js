import React, { Component } from "react";
import { Toast, Card, CardTitle, Row, Col, Input } from "react-materialize";
import firebase from "../firebase.js";
import { defaultinfo } from "./info.js";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {}
    };
  }

  editStory = (id) => {
    const ref = firebase.database().ref("items");
    ref.child(id).update(this.state.story)
  };

  componentDidMount = async () => {
    const ref = firebase.database().ref("items");
    let snapshot = await ref.child(this.props.match.params.id).once("value");
    this.setState({ story: snapshot.val() });
  };

  onChange = e => {
    const storyEditState = this.state.story;
    storyEditState[e.target.name] = e.target.value;
    this.setState({ stories: storyEditState });
  };

  handleDelete = e => {
    e.preventDefault();
    const itemRef = firebase
      .database()
      .ref(`/items/${this.props.match.params.id}`);
    itemRef.remove();
  };

  onSubmit = e => {
    e.preventDefault();
    this.editStory(this.props.match.params.id);
  };

  render() {
    const story = this.state.story;
    return (
      <div className="form-container">
        <h1>Edit</h1>
        <form className="form" onSubmit={this.onSubmit}>
          {/* Title Brick */}
          <div className="row header-row">
            <div className="col s12 m6 l6">
              Title:
              <p className="input-field">
                <input
                  id="title"
                  type="text"
                  onChange={this.onChange}
                  name="title"
                  defaultValue={story.title}
                />
                <label htmlFor="title">Story Title</label>
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
                />
                <label htmlFor="author">Author</label>
              </p>
            </div>

            {/* Tagline Brick */}

            <div className="col s12 m12 l12">
              <label>Genre</label>
              <select
                name="genre"
                onChange={this.onChange}
                className="browser-default"
              >
                <option value="" disabled>
                  Choose your option
                </option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Anime/Manga">Anime and Manga</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Drama">Drama</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
                <option value="Mystery">Mystery</option>
                <option value="Romance">Romance</option>
                <option value="Sci-Fi">Science Fiction</option>
                <option value="Thriller">Thriller</option>
              </select>
            </div>

            <div className="col s12 m12 l12">
              <div className="">
                <input
                  name="imgpath"
                  placeholder="url to image"
                  onChange={this.onChange}
                  defaultValue={story.imgpath}
                  type="text"
                />
                <p>
                  <em>This will be used as your story's display image.</em>
                </p>
              </div>
            </div>

            <div className="col s12 m12 l12">
              <div className="radio">
                <p>
                  Do you want your story to be readable upon publishing?
                  <em> Note: this is set to private by default</em>
                </p>
                <label>
                  <input name="group1" type="radio" value="true" />
                  <span>Keep private (default)</span>
                </label>
              </div>
              <p>
                <label>
                  <input name="group1" type="radio" value="false" />
                  <span>Public</span>
                </label>
              </p>
            </div>
          </div>
          
          {/* Summary Brick */}

          <DisplayRow story={story} name={"Summary"} />

          {/* You Brick */}
          <DisplayRow story={story} name={"You"} />
          {/* Need Brick */}
          <DisplayRow story={story} name={"Need"} />

          {/* Go Brick */}
          <DisplayRow story={story} name={"Go"} />

          {/* Search Brick */}
          <DisplayRow story={story} name={"Search"} />
          {/* Find Brick */}
          <DisplayRow story={story} name={"Find"} />
          {/* Take Brick */}
          <DisplayRow story={story} name={"Take"} />
          {/* Return Brick */}
          <DisplayRow story={story} name={"Returned"} />
          {/* Changed Brick */}
          <DisplayRow story={story} name={"Changed"} />

          <Toast type="submit" toast="STORY UPDATED!">
            UPDATE
          </Toast>
        </form>
      </div>
    );
  }
}

// Pass color string and get a start with that color fill
function DisplayRow(props) {
  let field = props.name.toLowerCase()
  let story = props.story;
  if (!story || !Object.getOwnPropertyNames(story).length) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="row">
        <div className="col s12 l12">
          <div className="card orange accent-3 col s12 m5 l5">
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {props.name}
                <i className="material-icons right">more_vert</i>
              </span>
            </div>
            <div className="card-reveal orange accent-3">
              <span className="card-title grey-text text-darken-4">
                <i className="material-icons right">close</i>
              </span>
              {defaultinfo[field]}
            </div>
          </div>

          <p className="input-field col s12 m7 l7">
            <textarea
              type="text"
              maxLength={300}
              onChange={props.onChange}
              defaultValue={props.story[field]}
              name={props.name}
            />
            <label htmlFor={props.name}>{props.name}</label>
          </p>
        </div>
      </div>
    );
  }
}

export default Edit;
