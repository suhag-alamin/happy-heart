import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useData from "../../../hooks/useData";
import Newsletter from "../../Home/Newsletter/Newsletter";
import OtherPageBanner from "../../OtherPageBanner/OtherPageBanner";
import SingleService from "../SingleService/SingleService";
import "./Services.css";

const Services = () => {
  // service context
  const services = useData();
  return (
    <div>
      {/* banner  */}
      <OtherPageBanner>
        <span>Services</span>
      </OtherPageBanner>
      <Container fluid style={{ backgroundColor: "#edf2f4" }}>
        <Container className="py-5">
          <div className="text-center">
            <p className="title mb-4">AT ONE GLANCE</p>
            <h3 className="fs-1">
              All our{" "}
              <span className="section-title" style={{ fontWeight: 700 }}>
                services
              </span>
            </h3>
            <p className="w-50 mx-auto mt-3 serivces-page-text">
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs.
            </p>
          </div>
          <Row xs={1} md={2} lg={3} className="g-4 py-5 text-center">
            {services.map((service) => (
              <Col key={service.id}>
                <SingleService
                  key={service.id}
                  service={service}
                ></SingleService>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
      {/* newsletter  */}
      <Newsletter></Newsletter>
    </div>
  );
};

export default Services;
