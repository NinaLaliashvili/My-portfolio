import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-text">
        {" "}
        &lt;/ Hello, I am Nini Laliashvili &gt;{" "}
      </div>
      <div className="header-text1">Full stack web developer.</div>
      <Link
        to="aboutme"
        smooth={true}
        offset={-70}
        duration={500}
        className="arrow-link"
      >
        <FaChevronDown className="down-arrow" />
      </Link>
    </div>
  );
}

export default Header;
