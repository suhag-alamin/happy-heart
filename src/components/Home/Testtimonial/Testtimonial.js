import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Testimonial.css";
// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
// auhtor img
import author1 from "../../../images/author-1.jpg";
import author2 from "../../../images/author-2.jpg";
import author3 from "../../../images/author-3.jpg";
import author4 from "../../../images/author-4.jpg";

const Testtimonial = () => {
  return (
    //   testimonial section
    <Container fluid className="py-5 testimonial-section">
      <Container>
        <div className="text-center feaure">
          <h3 className="fs-2  title mb-4">
            Patient{" "}
            <span style={{ color: "#2b2d42", fontWeight: 700 }}>
              testimonials
            </span>
          </h3>
          <p>A GOOD WORD MEANS A LOT</p>
        </div>
        {/* author testimonials  */}
        <Row className="py-4">
          <Col
            xs={12}
            md={6}
            lg={3}
            className="text-center animate__animated animate__fadeInLeft animate__delay-2s"
          >
            <div className="author">
              <div className="author-img mb-3">
                <img src={author1} alt="" />
                <p className="quote-icon">
                  {" "}
                  <FontAwesomeIcon icon={faQuoteRight} />
                </p>
              </div>

              <p className="feature-text">
                Professionals in their work, the surgery went well and I was
                able to go on with my life within just a few weeks. Recommended!
              </p>
              <h5>LARAINE FLEMMING</h5>
              <span>CBR</span>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            className="text-center animate__animated animate__fadeInUp animate__delay-2s"
          >
            <div className="author">
              <div className="author-img mb-3">
                <img src={author2} alt="" />
                <p className="quote-icon">
                  {" "}
                  <FontAwesomeIcon icon={faQuoteRight} />
                </p>
              </div>
              <p className="feature-text">
                I am deeply grateful to Dr. Chase for his expertise and care. He
                practices both the science and the art of cardiac surgery.
              </p>
              <h5>HERBIE HAYNES</h5>
              <span>Valve Prolapse Repair</span>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            className="text-center animate__animated animate__fadeInDown animate__delay-2s"
          >
            <div className="author">
              <div className="author-img mb-3">
                <img src={author3} alt="" />
                <p className="quote-icon">
                  {" "}
                  <FontAwesomeIcon icon={faQuoteRight} />
                </p>
              </div>
              <p className="feature-text">
                I felt like 102 before, now I feel like 52, thanks to Dr. Chase
                and his team. Their expertise is second to none!
              </p>
              <h5>ELLEN NORTON</h5>
              <span>TMR</span>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            className="text-center animate__animated animate__fadeInRight animate__delay-2s"
          >
            <div className="author">
              <div className="author-img mb-3">
                <img src={author4} alt="" />
                <p className="quote-icon">
                  {" "}
                  <FontAwesomeIcon icon={faQuoteRight} />
                </p>
              </div>
              <p className="feature-text">
                They gave me much more than health – they gave me my life back.
                One that I can still enjoy with my family and grandchildren.
              </p>
              <h5>WILLIAM SMITH</h5>
              <span>Pacemaker implantation</span>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Testtimonial;
