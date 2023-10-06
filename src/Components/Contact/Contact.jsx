import React from "react";
import "./Contact.css";
import get from "../Images/planet.png";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <img className="get" src={get} alt="get" />
      <h2 className="sayhello">SAY HELLO!</h2>
      <p className="huh">
        Whether you have an idea for a project or just want to chat, feel free
        to shoot me an email!
      </p>
      <button
        onClick={() =>
          (window.location.href = "mailto:ninilaliashvili8@gmail.com")
        }
        className="email-button"
      >
        Talk to Me
      </button>
    </section>
  );
}

export default Contact;
