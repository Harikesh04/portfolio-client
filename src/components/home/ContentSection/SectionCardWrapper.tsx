import { ReactNode } from "react";


interface SectionCardWrapperProps {
    children: ReactNode;
    altered?: boolean;
  }

const SectionCardWrapper = ({ children,altered=false }: SectionCardWrapperProps) => {
  return (
    <>
    <div className="ml-10 mr-36">
        <div className="py-10 w-full">
        <div className={`bg-gradient-to-r ${altered ? ' from-white to-blue-100' : 'from-lightBlack to-black'} h-full rounded-3xl w-full`}>
  {children}
</div>

        </div>
      </div>
    
    </>
  )
}

export default SectionCardWrapper