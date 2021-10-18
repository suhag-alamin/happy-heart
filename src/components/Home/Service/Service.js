import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useData from "../../../hooks/useData";
import SingleService from "../../Services/SingleService/SingleService";
import "./Service.css";

const Service = () => {
  const services = useData();
  console.log(services);
  return (
    <>
      <Container className="py-5">
        <h3 className="text-center title">
          {" "}
          <span className="section-title">SERVICES</span> AT ONE GLANCE
        </h3>
        <Row>
          {services.map((serive) => (
            <Col lg={4}>
              <SingleService></SingleService>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Service;
