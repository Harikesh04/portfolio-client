import React from "react";
import SectionCardWrapper from "../SectionCardWrapper";
import Card from "@/components/ui/Card";
import { project_data } from "@/constant/project-static-data";

interface ProjectsProps {
  innerRef: React.MutableRefObject<null>;
}

const Projects = ({ innerRef }: ProjectsProps) => {
  return (
    <SectionCardWrapper>
      <div
        id={"projects"}
        ref={innerRef}
        className="h-[400px] flex flex-col p-12 text-white"
      >
        <div>
          <p className="text-3xl font-bold mb-2">Personal Projects</p>
          <div className="bg-secondary rounded-full h-2 w-8 mb-8"></div>
        </div>

        <div className="flex gap-6">
          {project_data.map((project, index) => (
            <Card key={index} data={project} />
          ))}
        </div>
      </div>
    </SectionCardWrapper>
  );
};

export default Projects;
