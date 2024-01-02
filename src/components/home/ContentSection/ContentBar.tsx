import React from "react";
import Home from "./Home/Home";
import About from "./About/About";

const ContentBar = () => {
  return (
    <div className="flex flex-col overflow-y-auto   h-full w-full">
        <Home/>
        <About/>
      
    </div>
  );
};

export default ContentBar;
