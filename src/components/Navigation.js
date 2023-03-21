import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/Navigation.css';

// Navigation bar that is displayed on the top of the page. Uses the hamburger menu when the screen size is small.
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand as={Link} to="/reactfolio">
        Shayne Whittle
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/reactfolio" activeClassName="active">
            About Me
          </Nav.Link>
          <Nav.Link as={Link} to="/portfolio" activeClassName="active">
            Portfolio
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" activeClassName="active">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/resume" activeClassName="active">
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

