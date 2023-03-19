import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="nav-active">
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" activeClassName="nav-active">
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="nav-active">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="nav-active">
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
