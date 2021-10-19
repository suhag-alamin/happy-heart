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
import contact from "../../images/contact-us.png";
import { useForm } from "react-hook-form";

const Contact = () => {
  // form control
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <OtherPageBanner>
        <span>Contact Us</span>
      </OtherPageBanner>
      <Container fluid className="contact-top py-5">
        <Container className="py-4">
          <Row className="text-white g-4">
            <Col sm={6} md={6} lg={6} xl={3}>
              <div className="d-flex contact-details-icons gap-4">
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

            <Col sm={6} md={6} lg={6} xl={3}>
              <div className="d-flex contact-details-icons gap-4">
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

            <Col sm={6} md={6} lg={6} xl={3}>
              <div className="d-flex contact-details-icons gap-4">
                <div>
                  <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
                </div>
                <div className="contact-details">
                  <h6 className="single-service-title mb-4">WRITE TO US</h6>
                  <p>contact@happyHeart.com</p>
                </div>
              </div>
            </Col>

            <Col sm={6} md={6} lg={6} xl={3}>
              <div className="d-flex contact-details-icons gap-4">
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
      <Container className="contact-form py-5">
        <Row className="align-items-center">
          <Col lg={6}>
            <h3 className="fs-2">
              Send us a <span className="section-title">message</span>
            </h3>
            <div className="form-container mt-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("Name", { required: true })}
                />
                <input
                  type="text"
                  placeholder="Email"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  {...register("Subject", { required: true })}
                />
                <textarea
                  placeholder="Your message"
                  {...register("Message", { required: true })}
                />

                <input
                  type="submit"
                  className="btn-danger happy-btn"
                  value="Send"
                />
              </form>
            </div>
          </Col>
          <Col lg={6}>
            <img className="img-fluid" src={contact} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
