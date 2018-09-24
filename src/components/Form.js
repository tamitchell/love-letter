import React, { Component } from "react";
import {
  Toast,
  Icon,
  Row,
  Col,
  Card,
  CardTitle,
  Input
} from "react-materialize";
import firebase from "../firebase.js";
import { defaultinfo } from "./info.js";

class WriteStory extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      tagline: "",
      summary: "",
      author: "",
      you: "",
      need: "",
      go: "",
      search: "",
      find: "",
      take: "",
      returned: "",
      changed: "",
      imgpath: "",
      genre: "",
      public: false
    };
  }

  onChange = e => {
    const storyState = this.state;
    storyState[e.target.name] = e.target.value;
    this.setState(storyState);
    console.log(storyState);
  };

  onSubmit = e => {
    e.preventDefault();
    const itemsRef = firebase.database().ref("items");
    const item = {
      title: this.state.title,
      author: this.state.author,
      tagline: this.state.tagline,
      summary: this.state.summary,
      you: this.state.you,
      need: this.state.need,
      go: this.state.go,
      search: this.state.search,
      find: this.state.find,
      take: this.state.take,
      returned: this.state.returned,
      changed: this.state.changed,
      imgpath: this.state.imgpath,
      genre: this.state.genre
    };
    itemsRef.push(item);

    setTimeout(this.props.history.push("/all_stories"), 4000);
  };
  render() {
    return (
      <div className="form-container">
        <h1>Write A Story</h1>
        <form className="form" onSubmit={this.onSubmit}>
          {/* Title Brick */}
          <Row className="header-row">
            <Row>
              <Col className="input-field" s={12} m={6} l={6}>
                <Input
                  id="title"
                  type="text"
                  onChange={this.onChange}
                  name="title"
                  label="Title"
                />
              </Col>

              {/* Author Brick */}

              <Col className="input-field" s={12} m={6} l={6}>
                <Input
                  type="text"
                  id="author"
                  onChange={this.onChange}
                  name="author"
                  label="Author"

                />
              </Col>
            </Row>

            {/* Tagline Brick */}
            <Row>
              <Col s={12} m={12} l={12}>
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

              <Col s={12} m={6} l={6}>
                <Input
                  name="imgpath"
                  label="Preview Image"
                  placeholder="url to image"
                  onChange={this.onChange}
                  type="text"
                />
              </Col>
            </Row>

            <Row>
              <Col s={12} m={12} l={12}>
                <p>
                  Do you want your story to be readable upon publishing?
                  <em> Note: this is set to private by default</em>
                </p>
                {/* <Input name="group1" type="radio" value="Public" label="Public" />
              <Input
                name="group1"
                type="radio"
                value="Private"
                label="Private"
              /> */}
                <label>
                  <input name="group1" type="radio" value="true" />
                  <span>Keep private (default)</span>
                </label>
                <p>
                  <label>
                    <input name="group1" type="radio" value="false" />
                    <span>Public</span>
                  </label>
                </p>
              </Col>
            </Row>
          </Row>
          {/* Summary Brick */}
          <DisplayRow onChange={this.onChange} name={"Summary"} />

          <DisplayRow onChange={this.onChange} name={"You"} />


          <DisplayRow onChange={this.onChange} name={"Need"} />

          {/* Go Brick */}
          <DisplayRow onChange={this.onChange}  name={"Go"} />

          {/* Search Brick */}
          <DisplayRow onChange={this.onChange}  name={"Search"} />
          {/* Find Brick */}
          <DisplayRow onChange={this.onChange}  name={"Find"} />
          {/* Take Brick */}
          <DisplayRow onChange={this.onChange}  name={"Take"} />
          {/* Return Brick */}
          <DisplayRow onChange={this.onChange}  name={"Returned"} />
          {/* Changed Brick */}
          <DisplayRow onChange={this.onChange}  name={"Changed"} />

          <Toast type="submit" toast="STORY PUBLISHED! Heading to Main Page">
            PUBLISH
          </Toast>
        </form>
      </div>
    );
  }
}

function DisplayRow(props) {
  let field = props.name.toLowerCase();
  return (
    <Row>
      <Col s={12} m={5} l={5}>
        <Card
          className="orange accent-3"
          header={<CardTitle reveal image={""} waves="light" />}
          title={props.name}
          reveal={defaultinfo[field]}
        />
      </Col>
      <Col s={12} m={7} l={7}>
        <Input
          className="text-box browser-default"
          type="textarea"
          onChange={e => props.onChange(e)}
          name={field}
        />
      </Col>
    </Row>
  );
}

export default WriteStory;
