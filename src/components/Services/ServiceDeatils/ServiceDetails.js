import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useData from "../../../hooks/useData";
import "./ServiceDetails.css";
import ServiceLink from "./ServiceLink/ServiceLink";

const ServiceDetails = () => {
  // use params to get id
  const { serviceId } = useParams();
  //   get data
  const services = useData();
  const singleService = [];
  for (const service of services) {
    if (service.id === serviceId) {
      singleService.push(service);
    }
  }

  return (
    <>
      <Container fluid className="single-service-banner">
        <div className="container">
          <p>
            <Link to="/">Home/</Link> <Link to="/services">Services/</Link>{" "}
            <small>{singleService[0]?.name}</small>
          </p>
        </div>
      </Container>
      <Container className="py-5 mb-5">
        <Row className="gx-5">
          <Col lg={8}>
            <div>
              <h3 className="section-title single-service-title fs-2">
                {singleService[0]?.name}
              </h3>
            </div>
            <div className="service-slider mt-5 ">
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={singleService[0]?.img1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={singleService[0]?.img2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={singleService[0]?.img3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="description mt-5 text-muted">
              <p>{singleService[0]?.description}</p>
              <p>{singleService[0]?.longDescription}</p>
            </div>
          </Col>
          <Col lg={4} className="mt-3">
            <h4 className="single-service-title mb-4">Services</h4>
            <ul className="mt-3 service-link">
              {services.map((services) => (
                <ServiceLink
                  key={services.id}
                  name={services.name}
                  id={services.id}
                ></ServiceLink>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServiceDetails;
