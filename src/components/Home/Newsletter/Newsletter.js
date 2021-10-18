import React from "react";
import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import "./Newsletter.css";
import newsletter from "../../../images/Emails-bro.png";

const Newsletter = () => {
  return (
    //   newsletter section
    <Container className="py-5 my-5">
      <Row className="justify-content-center align-items-center">
        <Col
          lg={6}
          className="text-center animate__animated animate__backInLeft animate__delay-2s"
        >
          <img src={newsletter} alt="" />
        </Col>
        <Col
          lg={6}
          className="animate__animated animate__fadeInRightBig animate__delay-2s"
        >
          <div className="newsletter">
            <p className="single-service-title mb-4">GET THE NOTIFICATION</p>
            <h3 className="fs-2">We have some</h3>
            <h3 className="section-title fs-2 mb-4" style={{ fontWeight: 700 }}>
              Good news
            </h3>
            <p className="w-75 text-muted mb-4">
              Sign up for Medicare newsletter to receive all the new offers and
              discounts from Medicare clinic. Discounts are only valid four our
              newsletter subscribers.
            </p>
            <div>
              <Stack direction="horizontal" gap={3}>
                <Form.Control
                  className=" rounded-pill w-75"
                  placeholder="Type your Email Address"
                />
                <Button
                  variant="danger"
                  className="happy-btn px-4 rounded-pill"
                >
                  Submit
                </Button>
              </Stack>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Newsletter;
