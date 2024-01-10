import React from 'react'
import SectionCardWrapper from '../SectionCardWrapper'

interface ExperienceProps{
  innerRef:React.MutableRefObject<null>;

} 


const Experience = ({innerRef}:ExperienceProps) => {
  return (
    <SectionCardWrapper altered={true}>
    <div id='experience' ref={innerRef} className="h-[90vh]  flex  p-12  text-black">
      <div>
        <p className="text-3xl font-bold mb-2">Experience</p>
        <div className="bg-secondary rounded-full h-2 w-8 mb-8"></div>
      </div>
    </div>
  </SectionCardWrapper>
  )
}

export default Experience