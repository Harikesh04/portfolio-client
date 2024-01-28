import React from "react";
import SectionCardWrapper from "../SectionCardWrapper";
import { technologies } from "@/constant/content_static_data";
import Image from "next/image";
import {motion} from "framer-motion";
import {  springAnimation } from "@/components/framer-motion/variants";

interface SkillsSectionProps {
  innerRef: React.MutableRefObject<null>;
}

const Skills = ({ innerRef }: SkillsSectionProps) => {
  return (
    <SectionCardWrapper>
      <div
        id="skills"
        ref={innerRef}
        className="  flex flex-col w-full   p-12  text-white"
      >
        <div>
          <p className="text-3xl font-bold mb-2">My Skills</p>
          <div className="bg-secondary rounded-full h-2 w-8 mb-8"></div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center gap-10">
          {technologies.map((technology) => (
            <motion.div {...springAnimation} className="h-28 w-28" key={technology.name}>
              <Image
                src={technology.icon}
                width={100}
                height={100}
                placeholder="blur"
                className="rounded-full"
                alt="Skills"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionCardWrapper>
  );
};

export default Skills;
