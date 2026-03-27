import React from "react";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <div id="home" className="flex flex-col md:flex-row justify-between items-center py-10 md:py-0">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="h-fit tracking-wider font-light text-center px-4">
        <span className="text-xl">Hi, i'm Shrey</span>
        <h1 className="text-5xl md:text-[80px] leading-tight mt-7 mb-20 md:mb-40">
          Full-stack Developer <br />
          Product Engineer
        </h1>
        <span className="text-xl">scroll down</span>
      </div>
      <p className="hidden md:flex text-2xl font-extralight writing-vertical justify-center pr-10">
        Shrey Sawant
      </p>
    </div>
  );
};

export default Main;
