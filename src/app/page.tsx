'use client'

import React, { useEffect, useRef, useState } from "react";
import ContentBar from "@/components/home/ContentSection/ContentBar";
import SideBar from "@/components/home/SideBar/SideBar";
import Experience from "@/components/home/ContentSection/Experience/Experience";
import Contact from "@/components/home/ContentSection/Contact/Contact";
import Projects from "@/components/home/ContentSection/Projects/Projects";
import Skills from "@/components/home/ContentSection/Skills/Skills";
import About from "@/components/home/ContentSection/About/About";
import HomeSection from "@/components/home/ContentSection/Home/HomeSection";

interface ComponentProps {
  innerRef: React.MutableRefObject<null>;
}

interface RefElementItem {
  id: string;
  innerRef: React.MutableRefObject<null>;
  component: React.FC<ComponentProps>;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
      id: "skills",
      innerRef: skillsRef,
      component: (props) => <Skills {...props} />,
    },
    {
      id: "projects",
      innerRef: projectsRef,
      component: (props) => <Projects {...props} />,
    },
    {
      id: "contact",
      innerRef: contactRef,
      component: (props) => <Contact {...props} />,
    },
    {
      id: "experience",
      innerRef: experienceRef,
      component: (props) => <Experience {...props} />,
    },
  ];

  function useIsVisible(ref: React.MutableRefObject<null>) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        },
        {
          threshold: 0.6,
          rootMargin: "-50px",
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        observer.disconnect();
      };
    }, [ref]);

    return isVisible;
  }

  const visibilityData = refElement.map((item) => {

    console.log(item.innerRef);

    return {
      id: item.id,
      isVisible: useIsVisible(item.innerRef),
    };
  });

  useEffect(() => {
    const filteredItem = visibilityData.filter(item=>item.isVisible)
    setActiveSection(filteredItem.id);

  }, [visibilityData]);

  return (
    <section className="flex h-full w-full">
      <SideBar activeSection={activeSection} />
      <div className="flex  flex-col overflow-y-auto   h-full w-full">
        {refElement.map((item) => item.component({ innerRef: item.innerRef }))}
      </div>
    </section>
  );
}
