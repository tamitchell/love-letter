import React from "react";
import { Modal, Button, Row, Col } from "react-materialize";
import { Link } from "react-router-dom";
import fox from "../img/fox.png";

const Home = () => {
  return (
    <Row className="home-component">
      <Col s={12} m={12} l={12}>
        <section>
          <h5>Storyteller</h5>
          <Modal
            fixedFooter
            className="modal-container"
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
            <h3>What is Storyteller?</h3>
            <p>Storyteller was made for writers on the go.</p>

            <p>
              Et aliquet lectus vivamus malesuada, varius risus ut arcu dui hac
              dolor, donec libero. Integer ornare vulputate mauris feugiat
              aliquet, taciti a ac cras urna, erat ac, feugiat in. Id ridiculus
              aliquam vel eu purus, sed cras luctus tincidunt orci viverra
              quisque, non pellentesque sit sollicitudin. Sed volutpat felis
              lectus, tempor hac accumsan tristique lectus praesent, in etiam
              mi.
            </p>

            <p>
              Suspendisse suspendisse aliquam purus sit ante arcu, molestie in
              sociis turpis velit. Parturient massa, ac amet vehicula maecenas
              nam arcu, arcu sit facilisis et sit cursus libero, integer rutrum
              justo augue feugiat ut.
            </p>
          </Modal>
        </section>
      </Col>
      <Col s={12} m={12} l={12}>
        <Button>
          <Link to="/about">Learn More</Link>
        </Button>
      </Col>
    </Row>
  );
};

export default Home;
