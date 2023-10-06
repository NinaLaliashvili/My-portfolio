import React from "react";
import "./Resume.css";

function Resume() {
  const openResume = () => {
    window.open("/assets/NiniLaliashvili.pdf", "resumeWindow");
  };

  return (
    <section id="resume">
      <div className="text-container">
        <p className="textp">
          🚀 Much like Major Tom's voyage through the cosmos, my web development
          journey is full of exploration. Ready to dive deeper?
        </p>
      </div>
      <div className="button-container">
        <button className="button" onClick={openResume}>
          Download Resume
        </button>
      </div>
    </section>
  );
}

export default Resume;
