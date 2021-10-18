import React from "react";
import { Container, Table } from "react-bootstrap";
import "./Footer.css";
import call from "../../images/icons/call.png";
import location from "../../images/icons/location.png";
import heart from "../../images/icons/heart.png";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div>
        <Container fluid className="footer-map p-0 map-container">
          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d58414.91875560572!2d90.3585680978055!3d23.785420650329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d23.7806365!2d90.4193258!4m5!1s0x3755c0dbdd6121e9%3A0x28d6161b55e58cc4!2sbest%20heart%20hospital%20in%20dhaka!3m2!1d23.8036934!2d90.3619487!5e0!3m2!1sen!2sbd!4v1634499793190!5m2!1sen!2sbd"
              width="100%"
              height="700"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <Container>
            <div className=" footer-details pb-5 animate__animated animate__fadeInLeft animate__delay-3s">
              <h3 className="section-title text-center my-4">WORKING HOURS</h3>
              <div>
                <Table striped hover variant="dark">
                  <tbody>
                    <tr>
                      <td>MON – WED</td>
                      <td>8AM – 7PM</td>
                    </tr>
                    <tr>
                      <td>THU</td>
                      <td>8AM – 5PM</td>
                    </tr>
                    <tr>
                      <td>FRI</td>
                      <td>8AM – 5PM</td>
                    </tr>
                    <tr>
                      <td>SAT – SUN</td>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div
                className="d-flex gap-4 pb-2 mt-4"
                style={{ borderBottom: "1px solid #8d99ae" }}
              >
                <div>
                  <img src={call} alt="" />
                </div>
                <div className="text-white">
                  <h5>CALL US ANYTIME</h5>
                  <a
                    href="tel:+88 01791490304"
                    className="text-muted footer-details-text"
                  >
                    +88 01791490304
                  </a>
                </div>
              </div>

              <div
                className="d-flex gap-4 pb-2 mt-4"
                style={{ borderBottom: "1px solid #8d99ae" }}
              >
                <div>
                  <img src={location} alt="" />
                </div>
                <div className="text-white">
                  <h5>VISIT US ANYTIME</h5>

                  <p className="text-muted">
                    Plot-7/2, Section-2, Mirpur, Dhaka-1216, Bangladesh
                  </p>
                </div>
              </div>

              <div className="d-flex gap-4 pb-2 mt-4">
                <div>
                  <img src={heart} alt="" />
                </div>
                <div className="text-white">
                  <h5>BOOK AN APPOINTMENT</h5>
                  <p className="text-muted">
                    Click here to book an appointment at Happy Heart.
                  </p>
                </div>
              </div>
            </div>
            {/* logo and social icons */}
            <div className="d-flex justify-content-between align-items-center px-3 logo-social-section">
              <div>
                <img src={logo} alt="" />
              </div>
              <h4>
                WE CARE, <strong className="section-title">WE CAN</strong>{" "}
              </h4>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/suhag.alamin.315/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://twitter.com/suhag_alamain"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://github.com/developer-suhag"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </Container>
        </Container>
        <div className="copyright">
          <p>
            &copy; 2021 - All right reserved || Design & Developed by{" "}
            <strong style={{ color: "#8d99ae" }}>Suhag</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
