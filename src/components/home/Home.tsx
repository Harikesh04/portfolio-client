"use client";

import React, { useEffect, useRef, useState } from "react";
import SideBar from "@/components/home/SideBar/SideBar";
import Experience from "@/components/home/ContentSection/Experience/Experience";
import Contact from "@/components/home/ContentSection/Contact/Contact";
import Projects from "@/components/home/ContentSection/Projects/Projects";
import Skills from "@/components/home/ContentSection/Skills/Skills";
import About from "@/components/home/ContentSection/About/About";
import HomeSection from "@/components/home/ContentSection/Home/HomeSection";
import useIsVisible from "@/helper/customHooks/useIsVisible";
import { MdOutlineArrowUpward } from "react-icons/md";

interface ComponentProps {
  innerRef: React.MutableRefObject<null>;
}

interface RefElementItem {
  id: string;
  innerRef: React.MutableRefObject<null>;
  component: React.FC<ComponentProps>;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>("home");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);

  const refElement: RefElementItem[] = [
    {
      id: "home",
      innerRef: homeRef,
      component: (props) => <HomeSection {...props} />,
    },
    {
      id: "about",
      innerRef: aboutRef,
      component: (props) => <About {...props} />,
    },
    {
      id: "projects",
      innerRef: projectsRef,
      component: (props) => <Projects {...props} />,
    },
    {
      id: "experience",
      innerRef: experienceRef,
      component: (props) => <Experience {...props} />,
    },
    {
      id: "skills",
      innerRef: skillsRef,
      component: (props) => <Skills {...props} />,
    },

    {
      id: "contact",
      innerRef: contactRef,
      component: (props) => <Contact {...props} />,
    },
  ];

  const visibilityData = refElement.map((item) => {
    return {
      id: item.id,
      isVisible: useIsVisible(item.innerRef),
    };
  });

  const firstVisibleSection = visibilityData.find((item) => item.isVisible);

  useEffect(() => {

    if (firstVisibleSection) {
      setActiveSection(firstVisibleSection.id);
    }else{
      setActiveSection("experience");

    }
  }, [firstVisibleSection]);

  const handleMoveOnTop = () => {
    const anchor = document.querySelector(`#home`);

    anchor && anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <SideBar activeSection={activeSection} />
      <div className="flex  flex-col   overflow-y-auto   h-full w-full">
      {refElement.map((item) => (
          <React.Fragment key={item.id}>
            {item.component({ innerRef: item.innerRef })}
          </React.Fragment>
        ))}
      </div>
      {activeSection !== "home" && (
        <div
          onClick={handleMoveOnTop}
          className="absolute bg-secondary transition-all duration-300 hover:bg-white hover:text-secondary p-3 text-3xl font-bold text-white cursor-pointer rounded-full bottom-10 right-10"
        >
          <MdOutlineArrowUpward />
        </div>
      )}
    </>
  );
}
