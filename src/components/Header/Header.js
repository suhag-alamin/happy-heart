import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar className="nav-bar shadow sticky-top" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img style={{ width: "50%" }} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={NavLink}
                activeClassName="selected"
                className="nav-link"
                to="/home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="selected"
                className="nav-link"
                to="/services"
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="selected"
                className="nav-link"
                to="/about"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="selected"
                className="nav-link"
                to="/contact"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="selected"
                className="nav-link"
                to="/login"
              >
                Login
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="selected"
                className="nav-link"
                to="/signup"
              >
                SignUp
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
