"use client";

import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCrossCircled } from "react-icons/rx";

import Drawer from "./Drawer";

interface LeftBarT {
  children: React.ReactNode;
}

const LeftBarWrapper = ({ children }: LeftBarT) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 900);
    };

    checkMobileView(); // Initial check

    const handleResize = () => {
      checkMobileView();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleClose() {
    setIsOpen(false);
  }

  return isMobileView ? (
    <div>
      <span
        className="text-secondary absolute right-4 top-3 text-3xl p-1 z-30"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <RxCrossCircled /> : <RxHamburgerMenu />}
      </span>

      <Drawer isOpen={isOpen} onClose={handleClose}>
        {children}
      </Drawer>
    </div>
  ) : (
    <>{children}</>
  );
};

export default LeftBarWrapper;
