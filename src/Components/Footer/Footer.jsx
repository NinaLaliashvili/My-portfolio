import React from "react";
import "./Footer.css";
import insta from "../Images/instagram.png";
import fb from "../Images/facebook.png";
import github from "../Images/github-sign.png";
import link from "../Images/linkedin.png";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="contact-details">
          <p>Phone: +972 053-58-15-724</p>
          <p>Location: Tel Aviv, Israel</p>
        </div>
        <div className="social-links">
          <a
            href="https://www.facebook.com/nini.laliashvili.98"
            target="_blank"
            rel="noreferrer"
          >
            <img className="socim" src={fb} alt="fb" />
          </a>
          <a
            href="https://www.instagram.com/ninalaliashvili1/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="socim" src={insta} alt="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/nini-laliashvili-08a97b223/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="socim" src={link} alt="linkedin" />
          </a>
          <a
            href="https://github.com/NinaLaliashvili"
            target="_blank"
            rel="noreferrer"
          >
            <img className="socim" src={github} alt="git" />
          </a>
        </div>
        <div className="copyright">
          <p>© Nini Laliashvili 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
