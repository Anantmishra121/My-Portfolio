import React, { useState } from "react";
// Import all page section components
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBar";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";

/**
 * Home Component - Main page of the portfolio
 * Renders all sections of the portfolio website
 */
const Home = () => {
  // State to manage dark mode theme
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle between light and dark mode
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  // Render all portfolio sections
  return (
    <>
      <NavBar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Work darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
};

export default Home;
