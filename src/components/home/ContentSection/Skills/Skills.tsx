import React from 'react'
import SectionCardWrapper from '../SectionCardWrapper'

interface SkillsSectionProps{
  innerRef:React.MutableRefObject<null>;

} 

const Skills = ({innerRef}:SkillsSectionProps) => {
  return (
    <SectionCardWrapper  >
         <div id='skills'ref={innerRef}  className="h-[90vh]  flex  p-12  text-white">
         <div>
          <p className="text-3xl font-bold mb-2">My Skills</p>
          <div className="bg-secondary rounded-full h-2 w-8 mb-8"></div>
        </div>
         </div>

    </SectionCardWrapper>
  )
}

export default Skills