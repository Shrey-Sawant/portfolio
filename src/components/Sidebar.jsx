import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import {FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="mt-20 items-center flex flex-col pl-10">
      <div className="bg-black rounded-full size-1.5" />
      <div className="bg-black rounded-full h-72 w-[2px]" />
      <div className="bg-black rounded-full size-1.5" />
      <div className="mt-20 flex flex-col gap-9">
        <FaLinkedin className="size-6" />
        <FaWhatsapp className="size-6" />
        <FaGithub className="size-6" />
      </div>
    </div>
  );
};

export default Sidebar;
