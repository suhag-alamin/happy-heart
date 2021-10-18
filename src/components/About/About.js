import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import OtherPageBanner from "../OtherPageBanner/OtherPageBanner";
import "./About.css";
// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMd,
  faHeartbeat,
  faMedkit,
  faUserNurse,
  faAmbulance,
  faHospitalAlt,
} from "@fortawesome/free-solid-svg-icons";
import SingleTeamMember from "./SingleTeamMember/SingleTeamMember";

const About = () => {
  // team data
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("./team.json");
      const data = await res.json();
      setTeam(data);
    };
    loadData();
  }, []);
  return (
    <>
      {/* banner  */}
      <OtherPageBanner>
        <span>About</span>
      </OtherPageBanner>
      <Container className="py-5">
        <div className="about-top">
          <p className="single-service-title mb-4">
            MEDICAL EXCELLENCE, COMPASSIONATE CARE
          </p>
          <h3 className="fs-1">What we stand for?</h3>
          <h3 className="section-title fs-1" style={{ fontWeight: 700 }}>
            Our core values
          </h3>
          <p className="text-muted w-50 my-4">
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            robust ideas.
          </p>
        </div>
        {/* about core values  */}
        <Row xs={1} md={2} lg={3} className="g-4 py-5 about-values">
          <Col className="value-div animate__animated animate__fadeInLeft">
            <div className="d-flex gap-4">
              <div>
                <FontAwesomeIcon className="about-icon" icon={faUserMd} />
              </div>
              <div>
                <h5>DOCTOR YOU CHOOSE</h5>
                <p className="feature-text w-75 text-muted">
                  Distinctively exploit optimal alignments for intuitive
                  bandwidth. Quickly coordinate e-business applications.
                </p>
              </div>
            </div>
          </Col>
          <Col className="value-div animate__animated animate__fadeInDown">
            <div className="d-flex gap-4">
              <div>
                <FontAwesomeIcon className="about-icon" icon={faHeartbeat} />
              </div>
              <div>
                <h5>YOUR HEALTHCARE</h5>
                <p className="feature-text w-75 text-muted">
                  Dynamically target high-payoff intellectual capital for
                  customized technologies. Objectively integrate emerging core.
                </p>
              </div>
            </div>
          </Col>
          <Col className="value-div animate__animated animate__fadeInRight">
            <div className="d-flex gap-4">
              <div>
                <FontAwesomeIcon className="about-icon" icon={faMedkit} />
              </div>
              <div>
                <h5>ALWAYS THERE FOR YOU</h5>
                <p className="feature-text w-75 text-muted">
                  Progressively maintain extensive infomediaries via extensible
                  niches. Dramatically disseminate standardized metrics.
                </p>
              </div>
            </div>
          </Col>
          <Col className="value-div animate__animated animate__fadeInRight">
            <div className="d-flex gap-4">
              <div>
                <FontAwesomeIcon className="about-icon" icon={faUserNurse} />
              </div>
              <div>
                <h5>NURSING STAFF</h5>
                <p className="feature-text w-75 text-muted">
                  Distinctively re-engineer revolutionary meta-services and
                  premium architectures. Intrinsically incubate intuitive
                  opportunities.
                </p>
              </div>
            </div>
          </Col>
          <Col className="value-div animate__animated animate__fadeInUp">
            <div className="d-flex gap-4">
              <div>
                <FontAwesomeIcon className="about-icon" icon={faAmbulance} />
              </div>
              <div>
                <h5>EMERGENCY SERVICES</h5>
                <p className="feature-text w-75 text-muted">
                  Appropriately empower dynamic leadership skills after business
                  portals. Globally myocardinate interactive supply.
                </p>
              </div>
            </div>
          </Col>
          <Col className="value-div animate__animated animate__fadeInLeft">
            <div className="d-flex gap-4">
              <div>
                <FontAwesomeIcon className="about-icon" icon={faHospitalAlt} />
              </div>
              <div>
                <h5>PREMIUM FACILITIES</h5>
                <p className="feature-text w-75 text-muted">
                  Compellingly embrace empowered e-business after user friendly
                  intellectual capital. Interactively actualize front-end
                  processes.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* team member section  */}
      <Container fluid className="team-member-section py-5">
        <Container>
          {/* team member top  */}
          <div className="about-top">
            <p className="single-service-title mb-4">PEOPLE YOU CAN TRUST</p>
            <h3 className="fs-1">Your reliable team</h3>
            <h3 className="section-title fs-1" style={{ fontWeight: 700 }}>
              Medicare doctors
            </h3>
            <p className="text-muted w-50 my-4">
              Objectively integrate enterprise-wide strategic theme areas with
              functionalized infrastructures. Interactively productize premium
              technologies.
            </p>
          </div>
          {/* team members  */}
          <Row xs={1} md={2} lg={4} className="g-4 py-5 text-center">
            {team.map((member) => (
              <Col key={member.id} className="h-100">
                <SingleTeamMember member={member}></SingleTeamMember>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default About;
