import {
  faMapMarkedAlt,
  faHeartbeat,
  faEnvelope,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OtherPageBanner from "../OtherPageBanner/OtherPageBanner";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <OtherPageBanner>
        <span>Contact Us</span>
      </OtherPageBanner>
      <Container fluid className="contact-top py-5">
        <Container className="py-4">
          <Row className="text-white">
            <Col lg={3}>
              <div className="d-flex gap-4">
                <div>
                  <FontAwesomeIcon
                    className="contact-icon"
                    icon={faMapMarkedAlt}
                  />
                </div>
                <div className="contact-details">
                  <h6 className="single-service-title mb-4">ADDRESS</h6>
                  <p>Plot-7/2, Section-2, Mirpur, Dhaka-1216, Bangladesh</p>
                </div>
              </div>
            </Col>

            <Col lg={3}>
              <div className="d-flex gap-4">
                <div>
                  <FontAwesomeIcon
                    className="contact-icon"
                    icon={faMobileAlt}
                  />
                </div>
                <div className="contact-details">
                  <h6 className="single-service-title mb-4">CALL US</h6>
                  <p>+88 01791490304</p>
                </div>
              </div>
            </Col>

            <Col lg={3}>
              <div className="d-flex gap-4">
                <div>
                  <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
                </div>
                <div className="contact-details">
                  <h6 className="single-service-title mb-4">WRITE TO US</h6>
                  <p>contact@happyHeart.com</p>
                </div>
              </div>
            </Col>

            <Col lg={3}>
              <div className="d-flex gap-4">
                <div>
                  <FontAwesomeIcon
                    className="contact-icon"
                    icon={faHeartbeat}
                  />
                </div>
                <div className="contact-details">
                  <h6 className="single-service-title mb-4">
                    BOOK APPOINTMENT
                  </h6>
                  <p>Click here to book an appointment at Happy Heart.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Contact;
