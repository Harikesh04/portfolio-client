import React, { MutableRefObject } from "react";

interface ContentBarProps {
  refElement: {
    id: string;
    innerRef: MutableRefObject<null>;
    component: React.FC<any>;
  }[];
}

const ContentBar = ({ refElement }: ContentBarProps) => {
  return (
    <div className="flex  flex-col overflow-y-auto   h-full w-full">
      {refElement.map((item) => item.component({ innerRef: item.innerRef }))}
    </div>
  );
};

export default ContentBar;
