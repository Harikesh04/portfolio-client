import React from "react";
import HomeSection from "./Home/HomeSection";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";



const ContentBar = () => {
  return (
    <div className="flex  flex-col overflow-y-auto   h-full w-full">
    <HomeSection/>
    <About/>
    <Projects/>
    <Experience/>
    <Skills/>
    <Contact/>
  </div>
  );
};

export default ContentBar;
