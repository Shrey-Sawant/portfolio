import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const FlipText = ({ text, href }) => {
  return (
    <a
      href={href}
      onClick={(e) => {
        if (href.includes("#")) {
          const id = href.split("#")[1];
          const el = document.getElementById(id);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }}
      className="relative inline-flex h-6 overflow-hidden group cursor-pointer text-[#1a1a1a] no-underline"
    >
      <span className="flex items-center h-full transition-transform duration-300 group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute left-0 top-full flex items-center h-full transition-transform duration-300 group-hover:-translate-y-full">
        {text}
      </span>
    </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY <= 80;

      setScrolled((prev) => {
        const next = !isAtTop;
        return prev !== next ? next : prev;
      });

      if (isAtTop) {
        setIsOpen((prev) => (prev ? false : prev));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${scrolled ? "bg-[#e7e7e7] bg-opacity-100" : "bg-opacity-0"} w-full px-6 py-6 flex justify-between items-center z-50 sticky top-0`}
    >
      <img src={logo} alt="logo" className="size-16 bg-[#e7e7e7]" />

      <div className="relative flex items-center justify-end w-1/2">
        <div
          className={`hidden md:flex items-center gap-10 absolute transition-all duration-500 ${
            scrolled
              ? "-translate-y-6 opacity-0 pointer-events-none"
              : "translate-y-0 opacity-100"
          }`}
        >
          <FlipText text="[Home]" href="/#home" />
          <FlipText text="[About]" href="/#about" />
          <FlipText text="[Works]" href="/#works" />
          <FlipText text="[Contact]" href="/#contact" />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-[#1a1a1a] font-mono text-lg transition-all duration-500 ${
            scrolled
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0 md:pointer-events-none"
          }`}
        >
          <span className="relative inline-flex h-6 overflow-hidden">
            <span className="flex items-center h-full transition-transform duration-300 group-hover:-translate-y-full">
              {isOpen ? "[Close]" : "[Menu]"}
            </span>
            <span className="absolute left-0 top-full flex items-center h-full transition-transform duration-300">
              {isOpen ? "[Close]" : "[Menu]"}
            </span>
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#e7e7e7] flex flex-col items-center py-8 gap-8 shadow-sm z-50 border-t border-[#1a1a1a]/10">
          <div onClick={() => setIsOpen(false)}>
            <FlipText text="[Home]" href="/#home" />
          </div>
          <div onClick={() => setIsOpen(false)}>
            <FlipText text="[About]" href="/#about" />
          </div>
          <div onClick={() => setIsOpen(false)}>
            <FlipText text="[Works]" href="/#works" />
          </div>
          <div onClick={() => setIsOpen(false)}>
            <FlipText text="[Contact]" href="/#contact" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
