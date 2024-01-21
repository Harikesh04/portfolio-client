import React from "react";
import SectionCardWrapper from "../SectionCardWrapper";
import { experience_data } from "@/constant/content_static_data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { useInView } from "react-intersection-observer";


import "react-vertical-timeline-component/style.min.css";
import { TExperience } from "@/types";
import Image from "next/image";

interface ExperienceProps {
  innerRef: React.MutableRefObject<null>;
}

const ExperienceCard: React.FC<TExperience> = ({inView,...experience}) => {
  return (
    <VerticalTimelineElement
    visible={inView}
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      iconStyle={{ background: 'white' }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.companyName}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = ({ innerRef }: ExperienceProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <SectionCardWrapper altered={true}>
      <div id="experience" ref={innerRef} className="  flex  p-12 text-white">
        <div>
          <p className="text-3xl font-bold mb-2">{experience_data.title}</p>
          <div className="bg-secondary rounded-full h-2 w-8 mb-8"></div>
        </div>
      </div>
      <div ref={ref} className=" flex flex-col">
        <VerticalTimeline>
          {experience_data.experiences.map((experience, index) => {
            return <ExperienceCard  key={index} inView={inView} {...experience} />;
          })}
        </VerticalTimeline>
      </div>
    </SectionCardWrapper>
  );
};

export default Experience;
