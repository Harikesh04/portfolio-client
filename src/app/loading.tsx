import React from "react";

const loading = () => {
  return (
    <section className="bg-primary flex justify-center items-center h-screen w-full">
      <div className="bg-tertiary p-1 rounded-md w-[25vmax] ">
        <div className="flex px-1 items-center justify-between">
          <span className="text-white">Status</span>
          <div className="status-icons flex">
            <span className="circle bg-red-500"></span>
            <span className="circle bg-yellow-500"></span>
            <span className="circle bg-green-500"></span>
          </div>
        </div>
        <div className="h-[25vh] rounded-md bg-black flex justify-center items-center p-2">
          <div className="loading text-green-500">Loading...</div>
        </div>
      </div>
    </section>
  );
};

export default loading;
