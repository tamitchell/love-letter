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
                  onChange={this.onChange}
                  name="title"
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
                <option value="action">Action</option>
                <option value="adventure">Adventure</option>
                <option value="anime/manga">Anime and Manga</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="drama">Drama</option>
                <option value="fantasy">Fantasy</option>
                <option value="horror">Horror</option>
                <option value="mystery">Mystery</option>
                <option value="Romance">Romance</option>
                <option value="scifi">Science Fiction</option>
                <option value="thriller">Thriller</option>
              </select>
            </div>

            <div className="col s12 m12 l12">
              <div className="">
                <input
                  name="imgpath"
                  placeholder="url to image"
                  onChange={this.onChange}
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
          <DisplayRow name={"Summary"} />
          {/* You Brick */}
          <DisplayRow name={"You"} />
          {/* Need Brick */}
          <DisplayRow name={"Need"} />
          {/* Go Brick */}
          <DisplayRow name={"Go"} />
          {/* Search Brick */}
          <DisplayRow name={"Search"} />
          {/* Find Brick */}
          <DisplayRow name={"Find"} />
          {/* Take Brick */}
          <DisplayRow name={"Take"} />
          {/* Return Brick */}
          <DisplayRow name={"Returned"} />
          {/* Change Brick */}
          <DisplayRow name={"Changed"} />

          <Toast type="submit" toast="STORY PUBLISHED!">
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
      {/* <div className="card orange accent-3 col s12 m5 l5">
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {props.name}
                <Icon small>more_vert</Icon>
              </span>
            </div>
            <div className="card-reveal orange accent-3">
              <span className="card-title grey-text text-darken-4">
                <i className="material-icons right">close</i>
              </span>
              {defaultinfo[field]}
            </div>
          </div> */}
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
          onChange={props.onChange}
          name={props.name}
        />
      </Col>

      {/* <p className="input-field col s12 m7 l7">
          <textarea
            type="text"
            maxLength={300}
            onChange={props.onChange}
            name={props.name}
          />
          <label htmlFor={props.name}>{props.name}</label>
        </p> */}
    </Row>
  );
}

export default WriteStory;
