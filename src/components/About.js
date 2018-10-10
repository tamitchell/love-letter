import React, { Fragment } from "react";
import { Modal, Button, Row, Col, Slider, Slide } from "react-materialize";

const About = () => {
  return (
    <Fragment>
    <section className="home-browse">
    <span className=" circle dev-img-container">
    
      <img className="dev-img" src={require("../img/dev.jpg")} alt="Fox and moon logo" />
    </span>
      <span className="card-panel">
        <h6>Meet Tasha Mitchell</h6>
        <p className="summary"><em>blah</em></p>
        <p className="properties">
          Web Developer | UX Designer | Artist
        </p>
      </span>
    </section>
    <section className="wrapper">
    <article className="story-content">
        <p>
        Hello! I am a Full Stack Web Developer who brings words from mere concepts and ideas into a visual reality that’s both thought-provoking and interactive. When I transitioned from learning human languages as a linguist to computer programming, I was able to quickly transfer my skill of breaking down concepts to their bare syntax and grammar and reconstructing them into readable and functional code. All of these qualities not only add up to making me a great programmer, but overall, someone highly skilled in the talent of both crafting and materializing human narratives that reach vast variety of people, cultures, and organizations.
        </p>

        <p>This project was created less to show my design skills and moreso my programming and developer experience in working with ReactJS. It shows that I am proficient enough in the framework to build out full CRUD, user authentication, and that I am knowledable about the react-router-dom and how it works.</p>

        <p>Learn more about what I've made and what I can do <a href="https://tamitchell.github.io/">here.</a>
</p>
    </article>
    </section>
  </Fragment>
  );
};

export default About;
