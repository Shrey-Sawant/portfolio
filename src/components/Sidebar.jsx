import logo from "../assets/logo.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="mt-20 items-center flex flex-col pl-10">
      <div className="bg-black rounded-full size-1.5" />
      <div className="bg-black rounded-full h-72 w-[2px]" />
      <div className="bg-black rounded-full size-1.5" />
      <div className="mt-20 flex flex-col gap-9">
        <FaLinkedin className="size-6" onClick={() => window.open("https://www.linkedin.com/in/shrey-sawant-2bb4a0322/", "_blank")} />
        <FaGithub className="size-6" onClick={() => window.open("https://github.com/Shrey-Sawant", "_blank")} />
        <FaInstagram className="size-6" onClick={() => window.open("https://www.instagram.com/shreysawant0107/", "_blank")} />
      </div>
    </div>
  );
};

export default Sidebar;
