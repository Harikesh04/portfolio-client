"use client";

import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface LeftBarT {
  children: React.ReactNode;
}

const LeftBarWrapper = ({ children }: LeftBarT) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobileView, setIsMobileView] = useState(false);


  return true ? (
    <div>
      <span
        className="text-secondary absolute left-3 text-xl p-1 z-30 "
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <GiHamburgerMenu />
      </span>

      <div
        className={
          "fixed overflow-auto z-50 inset-0 transform ease-in-out  " +
          (isOpen
            ? `transition-opacity opacity-100 duration-500 
								 -translate-x-0" 
						    top-[70px]`
            : `transition-all delay-500 opacity-0 
-translate-x-full" 
						   `)
        }
      >
        {children}
      </div>
    </div>
  ) : (
    <div>{children}</div>
  );
};

export default LeftBarWrapper;
