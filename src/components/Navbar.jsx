import logo from "../assets/code.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
   <nav className="mb-20 flex items-center justify-between py-6 ">
    <div className="flex flex-shrink-0 items-center ">
    <img className="mx-2 w-10" src={logo} alt="logo"/>
    </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <FaLinkedin
       className="cursor-pointer"
       onClick={() => window.open("https://www.linkedin.com/in/shrey-sawant-2bb4a0322/", "_blank")}
       />
      <FaGithub
      className="cursor-pointer"
      onClick={() => window.open("https://github.com/Shrey-Sawant", "_blank")}
      />
      <FaInstagram
      className="cursor-pointer"
      onClick={() => window.open("https://www.instagram.com/shreysawant0107/", "_blank")}
      />
    </div>
   </nav>
  )
}

export default Navbar
