import React, { useState, useMemo } from "react";
import "./Projects.css";
import one from "../Images/1.png";
import zoom from "../Images/zoom.png";
import quiz from "../Images/quiz.png";
import lalala1 from "../Images/lalala1.png";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Notes App",
      link: "https://notes-app-nina.netlify.app/",
      source: "",
      image: one,
      description:
        "The Notes App is a user-friendly digital platform designed to keep your notes organized and easily accessible. With a clean and intuitive interface, users can quickly jot down their thoughts, create to-do lists, or draft ideas that can be revisited and edited anytime, anywhere. ",
    },
    {
      title: "Fact or Fiction fun quiz",
      link: "#",
      source: "https://github.com/NinaLaliashvili/Truth-Trials.git",
      image: quiz,
      description:
        "Dive into the world of truths and tales with the Fact or Fiction Fun Quiz! This engaging digital platform invites users to test their ability to distinguish between factual statements and fictional tales across a variety of topics. With each response, learn something new and challenge your understanding in a fun and interactive way. This project offers a lighthearted educational experience that promises a blend of learning and laughter. Get ready to decipher the real from the reel in a whirl of questions",
    },
    {
      title: "Pet Adoption Project",
      link: "#",
      source: "https://github.com/NinaLaliashvili/Pet-adoption.git",
      image: lalala1,
      description:
        "Embrace the journey of love and companionship with our Pet Adoption project. This user-friendly platform connects adorable pets with warm, loving homes. Explore a diverse range of pets waiting for their forever homes and find your perfect furry companion. Our intuitive interface makes pet adoption seamless and joyful, ensuring every pet finds their way to a loving haven. You can create beautiful beginnings with pets that leave paw prints on your heart!",
    },
  ];

  const gridTemplateColumns = useMemo(() => {
    switch (projects.length) {
      case 1:
        return "1fr";
      case 2:
        return "1fr 1fr";
      default:
        return "repeat(3, 1fr)";
    }
  }, [projects.length]);

  const handleCloseModal = (event) => {
    if (event.target.className === "modal") return;
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <h1 className="section-title">PROJECTS</h1>
      <div className="projects-grid" style={{ gridTemplateColumns }}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="card"
            onClick={() => setSelectedProject(project)}
          >
            <div className="image-container">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <h3 className="overlay-title">
                  <img className="zoom" src={zoom} alt="zoom" />
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <>
          <div className="dark-overlay" onClick={handleCloseModal}></div>
          <div className="modal" onClick={handleCloseModal}>
            <a className="tit" href={selectedProject.link} target="_blank">
              {" "}
              <h3 className="tit ">{selectedProject.title}</h3>
            </a>
            <img
              className="imgcard"
              src={selectedProject.image}
              alt={selectedProject.title}
            />
            <p className="tita">{selectedProject.description}</p>
            <a href={selectedProject.link} target="_blank">
              {" "}
              <button className="visit-button">Visit Site</button>
            </a>
            <a href={selectedProject.source} target="_blank">
              {" "}
              <button className="visit-button">Source</button>
            </a>
            <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Projects;
