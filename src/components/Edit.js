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
        <form className="form" onSubmit={this.onSubmit}>
          {/* Title Brick */}
          <Row className="card-panel header-row">
            <Col className="titular" s={12} m={12} l={12}>
              <h5>Story Properties (Editor Mode)</h5>
            </Col>
            <Row>
              <Col className="input-field" s={12} m={12} l={12}>
                <Input
                  type="text"
                  onChange={this.onChange}
                  name="title"
                  label="Title"
                  defaultValue={story.title}
                  />
              </Col>

              {/* Author Brick */}

              <Col className="input-field" s={12} m={12} l={12}>
                <Input
                  type="text"
                  onChange={this.onChange}
                  name="author"
                  label="Author"
                  defaultValue={story.author}
                />
              </Col>

              <Col s={12} m={12} l={12}>
                <Input
                  name="imgpath"
                  label="Cover Image"
                  onChange={this.onChange}
                  defaultValue={story.imgpath}
                  type="text"
                />
              </Col>
            </Row>

            <Row>
              <Col className="select-form" s={12} m={4} l={4}>
                <label>Rating</label>
                <select
                  name="rating"
                  onChange={this.onChange}
                  className="browser-default"
                  defaultValue={story.rating}
                >
                  <option value="" disabled>
                    Choose your option
                  </option>
                  <option value="K">Rated: K</option>
                  <option value="K+">Rated: K+</option>
                  <option value="T">Rated: T</option>
                  <option value="M">Rated: M</option>
                </select>
              </Col>
              <Col className="select-form" s={12} m={4} l={4}>
                <label>Language</label>
                <select
                  name="language"
                  onChange={this.onChange}
                  className="browser-default"
                  defaultValue={story.language}
                >
                  <option value="" disabled>
                    Choose your option
                  </option>
                  <option value="English">English</option>
                  <option value="Spanish">Español</option>
                  <option value="Mandarin">中文</option>
                  <option value="Arabic">العَرَبِيَّة</option>
                  <option value="Dutch">Nederlands</option>
                  <option value="Filipino">Filipino</option>
                  <option value="French">Français</option>
                  <option value="German">Deutsch</option>
                  <option value="Hindi">हिन्दी</option>
                  <option value="Italian">Italiano</option>
                  <option value="Japanese">日本語</option>
                  <option value="Korean">한국어</option>
                  <option value="Russian">русский</option>
                </select>
              </Col>
              <Col className="select-form" s={12} m={4} l={4}>
                <label>Genre</label>
                <select
                  name="genre"
                  onChange={this.onChange}
                  className="browser-default"
                  defaultValue={story.genre}
                >
                  <option value="" disabled>
                    Choose your option
                  </option>
                  <option value="Action">Action</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Anime/manga">Anime and Manga</option>
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
              </Col>
            </Row>

            {/* Tagline Brick */}
            <Row className="third-row">
              <Col s={12} m={12} l={12}>
                <p>
                  Do you want your story to be readable upon publishing?
                  <em> Note: this is set to private by default</em>
                  <br />
                  <br />
                  <label>
                    <input name="private" type="radio" value={true} />
                    <span>Keep private (default)</span>
                  </label>
                  <br />
                  <label>
                    <input name="private" type="radio" value={false} />
                    <span>Public</span>
                  </label>
                </p>
              </Col>
            </Row>
          </Row>
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

          <Row>

            <Col s={12} m={6} l={6}>
          <Toast type="submit" toast="STORY UPDATED! Heading back to Main Page">
            UPDATE
          </Toast>
            </Col>
            <Col s={12} m={6} l={6}>
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
            </Col>
          </Row>


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
