import React from "react";
import "./Experience.css";
import html from "../Images/html.png";
import css from "../Images/css.png";
import bootstrap from "../Images/bootstrap.png";
import javascript from "../Images/javascript.png";
import react from "../Images/react.png";
import reactnative from "../Images/reactnative.webp";
import node from "../Images/node.png";
import sql from "../Images/sql.png";
import mongodb from "../Images/mongodb.svg";
import git from "../Images/git.png";
import itc from "../Images/ilia.png";
import ilia from "../Images/itc.png";
import nasa from "../Images/nasa.png";

function Experience() {
  return (
    <section id="experience">
      <div className="header-text">
        <p className="exp">EXPERIENCE</p>
        <img className="nasa" src={nasa} alt="" />
        <p className="pp">
          I've been in web development for a year, and each learning curve feels
          like venturing into an endless cosmos. It's a fast-paced industry full
          of unexplored universes awaiting discovery. 🚀
        </p>
      </div>
      <div className="sections-container">
        <div className="section1">
          <h2 className="tec">Some technologies I've worked with:</h2>
          <div className="icons">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={bootstrap} alt="" />
            <img src={javascript} alt="" />
            <img src={react} alt="" />
          </div>
          <div className="icons">
            <img src={reactnative} alt="" />
            <img src={node} alt="" />
            <img src={sql} alt="" />
            <img src={mongodb} alt="" />
            <img src={git} alt="" />
          </div>
        </div>
        <div className="section2">
          <h2>My Education:</h2>
          <div className="icons1">
            <a href="https://iliauni.edu.ge/en/" target="blank">
              <img src={itc} alt="" />
            </a>
          </div>
          <div className="icons1">
            {" "}
            <a href="https://www.itc.tech/" target="blank">
              <img src={ilia} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
