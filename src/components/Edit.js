import React, { Component } from "react";
import { Toast, Modal, Button, Card, CardTitle, Row, Col, Input } from "react-materialize";
import firebase from "../firebase.js";
import { defaultinfo } from "./info.js";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {}
    };
  }

  editStory = id => {
    const ref = firebase.database().ref("items");
    ref.child(id).update(this.state.story);
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
    setTimeout(this.props.history.push('/all_stories'), 4000)

  };

  onSubmit = e => {
    e.preventDefault();
    this.editStory(this.props.match.params.id);
    setTimeout(this.props.history.push('/all_stories'), 4000)
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
              <p className="input-field">
                <input
                  id="title"
                  type="text"
                  onChange={this.onChange}
                  name="title"
                  label="Story Title"
                  defaultValue={story.title}
                />
              </p>
            </div>

            {/* Author Brick */}

            <div className="col s12 m6 l6">
              <p className="input-field">
                <input
                  type="text"
                  id="author"
                  onChange={this.onChange}
                  defaultValue={story.author}
                  name="author"
                  label="Author"
                />
              </p>
            </div>

            {/* Tagline Brick */}

            <div className="col s12 m12 l12">
              <label>Genre</label>
              <select
                name="genre"
                onChange={this.onChange}
                className="browser-default"
                defaultValue={story}
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

          <DisplayRow onChange={this.onChange} story={story} name={"Summary"} />

          {/* You Brick */}
          <DisplayRow onChange={this.onChange} story={story} name={"You"} />
          {/* Need Brick */}
          <DisplayRow onChange={this.onChange} story={story} name={"Need"} />

          {/* Go Brick */}
          <DisplayRow onChange={this.onChange} story={story} name={"Go"} />

          {/* Search Brick */}
          <DisplayRow onChange={this.onChange} story={story} name={"Search"} />
          {/* Find Brick */}
          <DisplayRow onChange={this.onChange} story={story} name={"Find"} />
          {/* Take Brick */}
          <DisplayRow onChange={this.onChange} story={story} name={"Take"} />
          {/* Return Brick */}
          <DisplayRow onChange={this.onChange} story={story} name={"Returned"} />
          {/* Changed Brick */}
          <DisplayRow onChange={this.onChange} story={story} name={"Changed"} />

          <Toast type="submit" toast="STORY UPDATED! Heading back to Main Page">
            UPDATE
          </Toast>

          <Modal
            header="Are you sure?"
            className="delete-modal"
            trigger={
              <Button waves="light">
                Delete
              </Button>
            }
          >
            <p>
              This will permanently delete your story. There's no going back!
            <Button onClick={e => this.handleDelete(e)}>
              Yes, delete my story forever.
              </Button> 
            </p>
          </Modal>
        </form>
      </div>
    );
  }
}

// Pass color string and get a start with that color fill
function DisplayRow(props) {
  let field = props.name.toLowerCase();
  let name = props.name
  let story = props.story;
  console.log(story)
  console.log(name)
  if (!story || !Object.getOwnPropertyNames(story).length) {
    return <div>Loading...</div>;
  } else {
    return (
      <Row>
      <Col s={12} m={5} l={5}>
        <Card
          className="orange accent-3"
          header={<CardTitle reveal image={""} />}
          title={props.name}
          reveal={defaultinfo[field]}
        />
      </Col>
      <Col s={12} m={7} l={7}>
        <Input
          className="text-box browser-default"
          type="textarea"
          onChange={props.onChange}
          defaultValue={story[field]}
          name={field}
        />
      </Col>
    </Row>
    );
  }
}

export default Edit;
