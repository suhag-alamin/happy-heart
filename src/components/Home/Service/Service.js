import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useData from "../../../hooks/useData";
import SingleService from "../../Services/SingleService/SingleService";
import "./Service.css";

const Service = () => {
  const services = useData();
  return (
    <Container fluid className="service-section">
      <Container className="py-5">
        <h3 className="text-center title">
          {" "}
          <span className="section-title">SERVICES</span> AT ONE GLANCE
        </h3>
        <Row xs={1} md={2} lg={3} className="g-4 mt-5 text-center">
          {services.slice(0, 6).map((service) => (
            <Col key={service.id} className="h-100">
              <SingleService service={service} key={service.id}></SingleService>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Service;
