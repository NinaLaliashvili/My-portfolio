import React from "react";
import "./Aboutme.css";
import { useState } from "react";
import mypic from "../Images/mypic.jpeg";
import mypic2 from "../Images/fox.png";
import travel from "../Images/travel.png";
import petcare from "../Images/pet-care.png";
import programming from "../Images/programming.png";
import ReactCardFlip from "react-card-flip";

function Aboutme() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <section id="aboutme" className="aboutme-section">
      <div className="intro-container">
        <p className="intro-title">A LITTLE BIT ABOUT MYSELF</p>
        <div onClick={handleFlip}>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <img
              src={mypic}
              alt="Nina's Portrait"
              className="portrait"
              key="front"
            />
            <img
              src={mypic2}
              alt="Nina's Portrait Back"
              className="portrait"
              key="back"
            />
          </ReactCardFlip>
        </div>
      </div>
      <div className="bio-container">
        <p className="bio-text">
          Hello! I'm Nini, a full stack web developer who started the tech
          journey at the
          <a className="atag" href="https://www.itc.tech/" target="blank">
            {" "}
            Israel Tech Challenge.
          </a>{" "}
          I adore coding, it's like a daily puzzle with endless solutions. Each
          code I crack unveils something new, making every day an exciting
          challenge. But there's more to me than just code. I'm also a writer,
          penning down my thoughts and emotions, letting them flow from my mind
          to the paper. It’s a soothing dance of words that helps me express
          myself. Away from the screen and paper, I’m an outdoor enthusiast. I
          find my serenity among the towering mountains, where each hike is a
          voyage of discovery. But, the adventure doesn’t end there. My love for
          nature extends to its gentle creatures. I adore petting animals, their
          simple joy and boundless love add a dash of warmth to my day.
        </p>
      </div>

      <div className="abilities-container">
        <div className="abilities-title-container">
          <p className="abilities-title">My main interests</p>
        </div>
        <div className="abilities-card">
          <div className="ability">
            <img src={programming} alt="coding" className="ability-icon" />
            <p className="ability-text">Coding</p>
          </div>
          <div className="ability">
            <img src={petcare} alt="another ability" className="ability-icon" />
            <p className="ability-text">Animals</p>
          </div>
          <div className="ability">
            <img src={travel} alt="another ability" className="ability-icon" />
            <p className="ability-text">Traveling</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
