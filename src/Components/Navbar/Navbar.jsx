import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <ul className={menuActive ? "active" : ""}>
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

      <div className="burger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
