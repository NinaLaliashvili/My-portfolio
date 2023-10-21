import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Aboutme from "./Components/About Me/Aboutme";
import Experience from "./Components/Experience/Experience";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";

function App() {
  return (
    <div>
      <Loader />
      <Navbar />
      <Header />
      <Aboutme />
      <Experience />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
