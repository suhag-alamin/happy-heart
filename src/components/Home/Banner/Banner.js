import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item interval={2000} className="slider-one">
          <Row>
            <Col className="d-none d-lg-block" xs={12} lg={1}></Col>
            <Col
              xs={12}
              md={12}
              lg={6}
              className="slider-item animate__animated animate__fadeInLeftBig"
            >
              <div>
                <span className="slider-top-text">INSPIRING BETTER HEALTH</span>
                <h1 className="banner-title">Healthy heart,</h1>
                <h1 className="section-title banner-title">healthy family</h1>
                <p className="w-75 mt-4 banner-text">
                  Globally harness multimedia based collaboration and
                  idea-sharing with backend products. Continually whiteboard
                  superior opportunities via covalent scenarios.
                </p>
              </div>
            </Col>
            <Col className="d-none d-lg-block" xs={12} lg={5}></Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={2000} className="slider-two">
          <Row>
            <Col lg={1}></Col>
            <Col
              lg={6}
              className="slider-item animate__animated animate__fadeInRightBig"
            >
              <span className="slider-top-text">
                GROWING TO MEET YOUR NEEDS
              </span>
              <h1 className="banner-title">Your wealth,</h1>
              <h1 className="section-title banner-title">is your health</h1>
              <p className="w-75 mt-4 banner-text">
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
