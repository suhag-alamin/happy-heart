import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import "./Banner.css";
import slider1 from "../../../images/slider-1.jpg";
import slider2 from "../../../images/slider-2.jpg";

const Banner = () => {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item interval={1000} className="slider-one">
          <Row>
            <Col lg={1}></Col>
            <Col lg={6} className="slider-item">
              <div>
                <span className="slider-top-text">INSPIRING BETTER HEALTH</span>
                <h1>Healthy heart,</h1>
                <h1 className="section-title">healthy family</h1>
                <p className="w-75 mt-4">
                  Globally harness multimedia based collaboration and
                  idea-sharing with backend products. Continually whiteboard
                  superior opportunities via covalent scenarios.
                </p>
              </div>
            </Col>
            <Col lg={5}></Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={1000} className="slider-two">
          <Row>
            <Col lg={1}></Col>
            <Col lg={6} className="slider-item">
              <span className="slider-top-text">
                GROWING TO MEET YOUR NEEDS
              </span>
              <h1>Your wealth,</h1>
              <h1 className="section-title">is your health</h1>
              <p className="w-75 mt-4">
                Compellingly embrace empowered e-business after user friendly
                intellectual capital. Interactively actualize front-end
                processes with effective convergence.
              </p>
            </Col>
            <Col lg={5}></Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
