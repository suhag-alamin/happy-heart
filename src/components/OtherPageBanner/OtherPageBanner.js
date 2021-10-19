import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OtherPageBanner.css";

const OtherPageBanner = ({ children }) => {
  return (
    <>
      <Container fluid className="other-banner">
        <div className="container text-center">
          <h5 className="banner-breadcumb">
            <Link to="/">Home /</Link>{" "}
            <small className="other-banner-text">{children}</small>
          </h5>
        </div>
      </Container>
    </>
  );
};

export default OtherPageBanner;
