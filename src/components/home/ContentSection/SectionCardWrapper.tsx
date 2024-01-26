import { ReactNode } from "react";

interface SectionCardWrapperProps {
  children: ReactNode;
  altered?: boolean;
}

const SectionCardWrapper = ({
  children,
  altered = false,
}: SectionCardWrapperProps) => {
  return (
    <>
     
        <div className="  w-full">
          <div
            className={`bg-gradient-to-r ${
              altered ? " primary " : "primary"
            }  h-full flex justify-center rounded-3xl w-full`}
          >
            {children}
          </div>
        </div>

    </>
  );
};

export default SectionCardWrapper;
