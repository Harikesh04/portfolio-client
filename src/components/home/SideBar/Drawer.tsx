import React from "react";

interface DrawerT {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Drawer = ({ children, isOpen,onClose }: DrawerT) => {
  const isLeftType = true;
  return (
    <div
      className={
        "fixed  z-50 h-screen  inset-0 transform ease-in-out  " +
        (isOpen
          ? `transition-opacity opacity-100 duration-500 ${
              isLeftType ? "-translate-x-0" : "translate-x-0"
            } `
          : `transition-all delay-500 opacity-0 ${
              isLeftType ? "-translate-x-full" : "translate-x-full"
            } `) + ""
      }
    >
      <div
        className={
          `h-screen  ${
            isLeftType ? "left-0" : "right-0"
          } absolute  w-[75vw] min-w-[250px] md:w-[40vw]  shadow-xl delay-400 duration-500 ease-in-out transition-all transform ` +
          (isOpen
            ? `${isLeftType ? "-translate-x-0" : "translate-x-0"}`
            : `${isLeftType ? "-translate-x-full" : "translate-x-full"}`)
        }
      >
        <div className="relative bg-tertiary overflowy--auto h-full min-w-[250px] w-[75vw] md:w-[40vw] overflow-y-auto  flex  ">
			
          {children}
        </div>
      </div>
      <div className="w-screen h-full cursor-pointer" onClick={onClose}></div>
    </div>
  );
};

export default Drawer;
