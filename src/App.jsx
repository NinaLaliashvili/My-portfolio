import React from "react";
import { Routes, Route } from "react-router-dom";
import SecretPage from "./Components/SecretPage/SecretPage";
import SecondSecretPage from "./Components/SecondSecretPage/SecondSecretPage";
import Navbar from "./Components/Navbar/Navbar";
import Aboutme from "./Components/About Me/Aboutme";
import Experience from "./Components/Experience/Experience";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";
import Bug from "./Components/Bug/Bug";

function MainContent() {
  return (
    <>
      <Loader />
      <Navbar />
      <Header />
      <Aboutme />
      <Experience />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div>
      <Bug />
      <Routes>
        <Route path="/secret" element={<SecretPage />} />
        <Route path="/secondSecretPage" element={<SecondSecretPage />} />
        <Route path="/" element={<MainContent />} />
      </Routes>
    </div>
  );
}

export default App;
