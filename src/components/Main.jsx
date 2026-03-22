import React from "react";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <div className="flex justify-between items-center">
      <Sidebar />
      <div className="h-fit tracking-wider font-light text-center">
        <span className="text-xl">Hi,i'm Shrey</span>
        <h1 className="text-[80px] leading-tight mt-7 mb-40">
          Full-stack Developer <br />
          Product Engineer
        </h1>
        <span className="text-xl">scroll down</span>
      </div>
      <p className="text-2xl font-extralight writing-vertical flex justify-center r-0">
        Shrey Sawant
      </p>
    </div>
  );
};

export default Main;
