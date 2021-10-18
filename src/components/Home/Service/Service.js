import React from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./Service.css";

const Service = () => {
  const { services } = useAuth();
  return (
    <>
      <Container className="py-5">
        <h3 className="text-center title">
          {" "}
          <span className="section-title">SERVICES</span> AT ONE GLANCE
        </h3>
        <Row>{}</Row>
      </Container>
    </>
  );
};

export default Service;
