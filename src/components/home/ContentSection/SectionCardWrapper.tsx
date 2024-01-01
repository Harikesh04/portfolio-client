import { ReactNode } from "react";


interface SectionCardWrapperProps {
    children: ReactNode;
  }

const SectionCardWrapper = ({ children }: SectionCardWrapperProps) => {
  return (
    <>
    <div className="ml-10 mr-36">
        <div className="py-10 w-full ">
          <div className="bg-lightBlack h-full rounded-3xl w-full	 ">{children}</div>
        </div>
      </div>
    
    </>
  )
}

export default SectionCardWrapper