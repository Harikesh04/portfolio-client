import React from "react";
import SectionCardWrapper from "../SectionCardWrapper";
import { technologies } from "@/constant/content_static_data";
import { BallCanvas } from "@/components/canvas";

interface SkillsSectionProps {
  innerRef: React.MutableRefObject<null>;
}

const Skills = ({ innerRef }: SkillsSectionProps) => {
  return (
    <SectionCardWrapper>
      <div
        id="skills"
        ref={innerRef}
        className="  flex flex-col  p-12  text-white"
      >
        <div>
          <p className="text-3xl font-bold mb-2">My Skills</p>
          <div className="bg-secondary rounded-full h-2 w-8 mb-8"></div>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      </div>
    </SectionCardWrapper>
  );
};

export default Skills;
