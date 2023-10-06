import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="aboutme" smooth={true} className="nav-link custom-link">
            About Me
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} className="nav-link custom-link">
            Experience
          </Link>
        </li>
        <li>
          <Link to="resume" smooth={true} className="nav-link custom-link">
            Resume
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} className="nav-link custom-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} className="nav-link custom-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
