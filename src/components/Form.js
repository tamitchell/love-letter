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
      summary: "",
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
      summary: this.state.summary,
      imgpath: this.state.imgpath,
      genre: this.state.genre
    };
    itemsRef.push(item);

    setTimeout(this.props.history.push("/all_stories"), 4000);
  };
  render() {
    return (
      <div className="form-container">
        <h1>Story Properties</h1>
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
                  defaultValue=""
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
                  label="Cover Image"
                  onChange={this.onChange}
                  type="text"
                />
              </Col>
            </Row>
            <Row>
              <Col s={12} m={6} l={6}>
                <label>Rating</label>
                <select
                  name="rating"
                  onChange={this.onChange}
                  className="browser-default"
                  defaultValue="T"
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
              <Col s={12} m={6} l={6}>
                <label>Language</label>
                <select
                  name="language"
                  onChange={this.onChange}
                  className="browser-default"
                  defaultValue="English"
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
            </Row>

            <Row>
              <Col s={12} m={12} l={12}>
                <p>
                  Do you want your story to be readable upon publishing?
                  <em> Note: this is set to private by default</em>
                </p>
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

          <Toast type="submit" toast="STORY SAVED! Heading to Main Page">
            SAVE
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
          name={props.name}
        />
      </Col>
    </Row>
  );
}

export default WriteStory;
