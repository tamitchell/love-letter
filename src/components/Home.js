import React from "react";
import { Modal, Button, Row, Col, Slider, Slide } from "react-materialize";
import { Link } from "react-router-dom";
import fox from "../img/fox.png";

const Home = () => {
  return (
    <div className="wrapper">
    <Row className="home-component">
      <Col s={12} m={12} l={12}>
        <section>
          <h1>StoryTeller</h1>
          <Modal
            fixedFooter
            className="modal-container transparent"
            trigger={
              <Button className="modal-btn">
                <div className="moon-shadowouter">
                  <div className="moon-shadowinner">
                    <div className="moon">
                      <img src={fox} alt="fox" />
                    </div>
                  </div>
                </div>
              </Button>
            }
          >
            <Slider className="slider">
              <Slide className="slide"
                src="https://cdn.dribbble.com/users/1166566/screenshots/3549644/typing2.gif"
                placement="right"
              >
              <section className="first-slide-content">
              <h5>What is it?</h5>
              <p className="subtitle">
                Storyteller was made for writers on the go.
              </p>
              </section>
              </Slide>
              <Slide className="slide"
                src="https://cdn.dribbble.com/users/941326/screenshots/3421383/portal_gun.gif"
              >
              <section>
                
              <p>
                It uses Ricky and Morty Creator Dan Harmon's{" "}
                <a href="http://channel101.wikia.com/wiki/Story_Structure_104:_The_Juicy_Details">
                  <em>Story Embryo</em>{" "}
                </a>
                to help organize thoughts and return them in a cohesive and
                organized format.
              </p>
                </section>
              </Slide>
              <Slide className="slide"
                src="https://cdn.dribbble.com/users/976874/screenshots/3395008/blackblitz_earthhour_dribbble.gif"
              >
              <section>
                <p>
                While currently not meant for longer compositions,
                this site is perfect for quick bouts of inspiration that can be
                shown to the world!
                </p>
              </section>
              </Slide>
              <Slide className="slide"
                src="https://cdn.dribbble.com/users/1184562/screenshots/2760418/tail_dribbble.gif"
              >
                <section>
                <Link className="btn" to="/story/create">Start</Link>
                </section>
              </Slide>
            </Slider>
          </Modal>
        </section>
      </Col>
    </Row>
    <Row>
      <Col s={12} m={12} l={12}>
      <Link to="/about">
      Meet the Dev
      </Link>
      </Col>

    </Row>
    </div>
  );
};

export default Home;
