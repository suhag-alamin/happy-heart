import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  // auth context
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar className="nav-bar shadow sticky-top" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img style={{ width: "50%" }} className="logo" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
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
              {!user?.email && (
                <Nav.Link
                  as={NavLink}
                  activeClassName="selected"
                  className="nav-link"
                  to="/login"
                >
                  Login
                </Nav.Link>
              )}
              {!user?.email && (
                <Nav.Link
                  as={NavLink}
                  activeClassName="selected"
                  className="nav-link"
                  to="/signup"
                >
                  SignUp
                </Nav.Link>
              )}
              {user?.email && (
                <Button onClick={logOut} className="nav-link" variant="text">
                  Logout
                </Button>
              )}
              <span>
                {user?.photoURL ? (
                  <img className="user-img" src={user.photoURL} alt="" />
                ) : (
                  <small className="text-dark ms-3">{user?.displayName}</small>
                )}
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
