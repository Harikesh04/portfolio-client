
import React from 'react'
import SectionCardWrapper from '../SectionCardWrapper'

const Projects = () => {
  return (
    <SectionCardWrapper >
         <div id={'projects'} className="h-[90vh]  flex  p-12  text-white">
         <div>
          <p className="text-3xl font-bold mb-2">My Projects</p>
          <div className="bg-secondary rounded-full h-2 w-8 mb-8"></div>
        </div>
         </div>

    </SectionCardWrapper>
  )
}

export default Projects