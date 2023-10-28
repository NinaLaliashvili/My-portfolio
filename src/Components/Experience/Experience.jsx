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
          <h2 className="tec">My Education:</h2>
          <div className="education-card">
            <h3>Israel Tech Challenge: Fullstack Web Development</h3>
            <p>
              Embracing the full spectrum of web development during my time at
              the Israel Tech Challenge.
            </p>
            <ul>
              <li>
                Completed major projects involving React, Node.js, and database
                management, showcasing the integration of frontend and backend
                technologies.
              </li>
              <li>
                Volunteered as a mentor for newcomers, helping them transition
                smoothly into the fast-paced tech world.
              </li>
              <li>
                Collaborated in team-based hackathons, achieving commendable
                placements in challenges centered around real-world problems.
              </li>
              <li>
                Consistently participated in weekly tech talks, broadening my
                horizon beyond the syllabus.
              </li>
            </ul>
            <a href="https://www.itc.tech/" target="blank">
              <img src={ilia} alt="Israel Tech Challenge Logo" />
            </a>
          </div>

          <div className="education-card ilia-card">
            <h3>Ilia State University, 2016 - 2020</h3>
            <p>Bachelor's in Psychology and Social Sciences</p>
            <p>Honors: Dean's List for three consecutive years</p>
            <a href="https://iliauni.edu.ge/en/" target="blank">
              <img src={itc} alt="Ilia State University Logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
