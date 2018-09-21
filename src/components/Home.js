import React from "react";
import { Modal, Button, Row, Card, CardTitle, Col } from "react-materialize";
import fox from "../img/fox.png";
const Home = () => {
  return (
    <Row className="home-component">
      <Col s={12} m={12} l={12}>
        <section>
          <Modal
            fixedFooter
            header="Storyteller"
            trigger={
              <Button className="modal-btn">
                <div className="moon">
                  <img src={fox} alt="fox" />
                </div>
              </Button>
            }
          >
              <p>Hi</p>
          </Modal>
        </section>
        
      </Col>
    </Row>
  );
};

export default Home;
