// import React from "react";
// import { NavLink } from "react-router-dom";
// import "../style/Navigation.css";

// const Navigation = () => {
//   return (
//     <nav className="navigation">
//       <ul className="nav-list">
//         <li className="nav-item">
//           <NavLink exact to="/" activeClassName="nav-active">
//             About Me
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/portfolio" activeClassName="nav-active">
//             Portfolio
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/contact" activeClassName="nav-active">
//             Contact
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/resume" activeClassName="nav-active">
//             Resume
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/Navigation.css';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand as={Link} to="/">
        Shayne Whittle
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" activeClassName="active">
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

