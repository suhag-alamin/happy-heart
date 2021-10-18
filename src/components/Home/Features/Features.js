import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Features.css";
import feature1 from "../../../images/img-box-01.jpg";
import feature2 from "../../../images/img-box-02.jpg";
import feature3 from "../../../images/img-box-03.jpg";
import feature4 from "../../../images/img-box-04.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faBuilding,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    //   feature section
    <>
      <Container className="py-5">
        <Row className="g-4 g-lg-0 feature-row">
          <Col xs={12} md={6} lg={3}>
            <Card className="h-100 animate__animated animate__fadeInLeft">
              <Card.Img variant="top" src={feature1} />
              <Card.Body
                className="text-white px-4 py-4"
                style={{ backgroundColor: "#ef233c" }}
              >
                <p className="single-service-title feature-text mb-4">
                  A BETTER LIFE
                </p>
                <Card.Title>
                  <h3>Heart surgery</h3>
                </Card.Title>
                <Card.Text className="feature-text">
                  Uniquely deploy cross-unit benefits with wireless testing
                  procedures. Collaboratively build backward compatible
                  relationships whereas tactical paradigms.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Card className="h-100 animate__animated animate__fadeInDown animate__delay-1s">
              <Card.Img variant="top" src={feature2} />
              <Card.Body
                className="text-white px-4 py-4"
                style={{ backgroundColor: "#e00f28" }}
              >
                <p className="single-service-title feature-text mb-4">
                  GETTING A NEW CHANCE
                </p>
                <Card.Title>
                  <h3>Valve prolapse</h3>
                </Card.Title>
                <Card.Text className="feature-text">
                  Quickly incentivize impactful action items before tactical
                  collaboration and idea-sharing. Monotonically engage
                  intellectual capital through wireless opportunities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Card className="h-100 animate__animated animate__fadeInUp animate__delay-1s">
              <Card.Img variant="top" src={feature3} />
              <Card.Body
                className="text-white px-4 py-4"
                style={{ backgroundColor: "#d00b22" }}
              >
                <p className="single-service-title feature-text mb-4">
                  SAVING LIVES
                </p>
                <Card.Title>
                  <h3>Emergencies</h3>
                </Card.Title>
                <Card.Text className="feature-text">
                  Globally harness multimedia based collaboration and
                  idea-sharing with backend products. Continually whiteboard
                  superior opportunities via covalent scenarios.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Card className="h-100 animate__animated animate__fadeInRight animate__delay-1s">
              <Card.Img variant="top" src={feature4} />
              <Card.Body
                className="text-white px-4 py-4"
                style={{ backgroundColor: "#282828" }}
              >
                <div className="d-flex gap-4">
                  <div>
                    <FontAwesomeIcon
                      className="fs-3 feature-icon"
                      icon={faMobileAlt}
                    />
                  </div>
                  <div>
                    <h6>24/7 EMERGENCY</h6>
                    <p className="feature-text">0-800-777-2331</p>
                  </div>
                </div>
                <div className="d-flex gap-4">
                  <div>
                    <FontAwesomeIcon
                      className="fs-3 feature-icon"
                      icon={faBuilding}
                    />
                  </div>
                  <div>
                    <h6>OUR LOCATION</h6>
                    <p className="feature-text">27th Avenue New York, W2 3XE</p>
                  </div>
                </div>
                <div className="d-flex gap-4">
                  <div>
                    <FontAwesomeIcon
                      className="fs-3 feature-icon"
                      icon={faHeartbeat}
                    />
                  </div>
                  <div>
                    <h6>DEDICATED DOCTOR</h6>
                    <p className="feature-text">
                      Contact us to get a dedicated doctor for your issues.
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Features;
