import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const footerRef = useRef(null);
  const bigTextRef = useRef(null);
  const lineRef = useRef(null);
  const linksRef = useRef(null);
  const bottomRef = useRef(null);
  const bentoRef = useRef(null);
  const emailRef = useRef(null);
  const ctaRef = useRef(null);

  const [emailValue, setEmailValue] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const letters = bigTextRef.current?.querySelectorAll(".letter");
      gsap.fromTo(
        letters,
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          stagger: 0.035,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: bigTextRef.current, start: "top 85%" },
        },
      );

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: { trigger: lineRef.current, start: "top 90%" },
        },
      );

      const linkItems = linksRef.current?.querySelectorAll(".link-item");
      gsap.fromTo(
        linkItems,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: { trigger: linksRef.current, start: "top 90%" },
        },
      );

      gsap.fromTo(
        ctaRef.current,
        { scale: 0.75, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: ctaRef.current, start: "top 90%" },
        },
      );

      const cells = bentoRef.current?.querySelectorAll(".bento-cell");
      gsap.fromTo(
        cells,
        { opacity: 0, scale: 0.92, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.09,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: { trigger: bentoRef.current, start: "top 88%" },
        },
      );

      gsap.fromTo(
        emailRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: emailRef.current, start: "top 92%" },
        },
      );

      gsap.fromTo(
        bottomRef.current,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: { trigger: bottomRef.current, start: "top 95%" },
        },
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px) scale(1.04)`;
    btn.style.transition = "transform 0.1s ease";
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translate(0,0) scale(1)";
    e.currentTarget.style.transition =
      "transform 0.45s cubic-bezier(0.23,1,0.32,1)";
  };

  const splitLetters = (text) =>
    text.split("").map((ch, i) => (
      <span key={i} className="letter inline-block">
        {ch === " " ? "\u00A0" : ch}
      </span>
    ));

  const handleSend = () => {
    if (!emailValue.trim()) return;
    setSent(true);
    const gsap = window.gsap;
    if (gsap) {
      gsap.fromTo(
        ".sent-msg",
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
      );
    }
  };

  const socials = [
    {
      label: "GitHub",
      href: "#",
      icon: (
        <FaGithub size={24} fill="currentColor" />
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: (
         <FaLinkedin size={24} fill="currentColor" />
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <FaInstagram size={24} fill="currentColor" />
      ),
    },
  ];

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="relative bg-[#e7e7e7] text-[#1a1a1a] overflow-hidden border-t border-[#1a1a1a]/10 font-mono"
    >

      <div className="px-6 md:px-20 pt-16 md:pt-28 pb-10 md:pb-14">
        <div className="flex flex-wrap items-start">
          <div className="flex-1 min-w-[300px]">
            <p className="text-3xl tracking-[0.22em] uppercase text-[#1a1a1a]/50 mb-8">
              Let's work together
            </p>

            <div
              ref={bigTextRef}
              className="font-sans font-light text-4xl mb-16"
            >
              <div className="overflow-hidden">
                {splitLetters("Got an idea?")}
              </div>
              <div className="overflow-hidden mt-[0.1em]">
                <span className="text-[#c9a8d4]">
                  {splitLetters("Let's build it.")}
                </span>
              </div>
            </div>

            <div ref={ctaRef} className="inline-block">
              <a
                href="mailto:shreysawant01@gmail.com"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="inline-flex items-center gap-4 px-10 py-6 bg-[#1a1a1a] text-[#ebebeb] text-[15px] tracking-[0.16em] uppercase no-underline transition-colors duration-300 cursor-pointer"
              >
                Say Hello
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 8h12M9 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex-1 min-w-[340px] flex flex-col gap-4">
            <div
              ref={bentoRef}
              className="grid grid-cols-3 grid-rows-2 gap-[7px]"
            >
              <div className="bento-cell col-span-3 lg:col-span-2 flex flex-col justify-between min-h-[160px] p-8 border border-[#1a1a1a]/[0.12] cursor-default transition-all duration-200 hover:border-[#1a1a1a]/40 hover:bg-[#1a1a1a]/[0.03]">
                <span className="text-[17px] tracking-[0.18em] uppercase text-[#1a1a1a]/45 font-mono">
                  Engineering
                </span>
                <span className="font-sans font-light text-[#1a1a1a] text-3xl">
                  Full-Stack
                  <br />
                  Development
                </span>
              </div>

              <div className="bento-cell col-span-3 lg:col-span-1 lg:row-span-2 flex flex-col justify-between min-h-[340px] p-8 border border-[#1a1a1a]/[0.12] cursor-default transition-all duration-200 hover:border-[#1a1a1a]/40 hover:bg-[#1a1a1a]/[0.03]">
                <span className="text-[17px] tracking-[0.18em] uppercase text-[#1a1a1a]/45 font-mono">
                  Based in
                </span>
                <span className="font-sans text-[3rem] font-light text-[#1a1a1a] tracking-[-0.03em] leading-[1.1]">
                  Mumbai
                  <br />
                  India
                </span>
                <svg
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  fill="none"
                  className="self-end opacity-40"
                >
                  <circle
                    cx="12"
                    cy="11"
                    r="3"
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="bento-cell col-span-3 lg:col-span-1 flex flex-col justify-between min-h-[160px] p-8 border border-[#1a1a1a]/[0.12] cursor-default transition-all duration-200 hover:border-[#1a1a1a]/40 hover:bg-[#1a1a1a]/[0.03]">
                <span className="text-[17px] tracking-[0.18em] uppercase text-[#1a1a1a]/45 font-mono">
                  Focus
                </span>
                <span className="font-sans text-[2rem] font-light text-[#1a1a1a] tracking-[-0.01em] leading-[1.2]">
                  Scalable 
                  <br />
                  Solutions
                </span>
              </div>

              <div className="bento-cell col-span-3 lg:col-span-1 flex flex-col justify-between min-h-[160px] p-8 border border-[#1a1a1a]/[0.12] cursor-default transition-all duration-200 hover:border-[#1a1a1a]/40 hover:bg-[#1a1a1a]/[0.03]">
                <span className="text-[17px] tracking-[0.18em] uppercase text-[#1a1a1a]/45 font-mono">
                  Status
                </span>
                <div className="flex items-center gap-3">
                  <span className="relative flex w-5 h-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
                    <span className="relative inline-flex w-5 h-5 rounded-full bg-green-500" />
                  </span>
                  <span className="text-[17px] tracking-[0.1em] uppercase text-[#1a1a1a]/55 font-mono">
                    Available
                  </span>
                </div>
              </div>
            </div>

            <div ref={emailRef} className="flex flex-col gap-3 mt-2">
              <p className="font-sans font-light text-[#1a1a1a] text-email-lbl">
                Or drop me a <span className="text-[#c9a8d4]">message</span> —
              </p>

              {!sent ? (
                <>
                  <div className="flex border border-[#1a1a1a]/20 overflow-hidden focus-within:border-[#1a1a1a] transition-colors duration-200">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      className="flex-1 bg-transparent border-none outline-none px-5 py-4 font-mono text-[16px] text-[#1a1a1a] tracking-[0.04em] placeholder:text-[#1a1a1a]/35"
                    />
                    <button
                      onClick={handleSend}
                      className="px-8 py-5 bg-[#1a1a1a] text-[#ebebeb] font-mono text-[15px] tracking-[0.16em] uppercase flex items-center gap-3 transition-colors duration-200 hover:bg-[#e8c97e] hover:text-[#1a1a1a] cursor-pointer border-none"
                    >
                      Send
                        <FaArrowRight size={14} fill="currentColor" />
                    </button>
                  </div>
                  <p className="text-[15px] tracking-[0.08em] text-[#1a1a1a]/40">
                    No spam. Just a reply from Shrey.
                  </p>
                </>
              ) : (
                <div className="sent-msg flex items-center gap-4 py-4">
                  <div className="w-6 h-6 rounded-full bg-[#c9a8d4] flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7l3.5 3.5L12 3"
                        stroke="#fff"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <span className="font-sans text-[1.25rem] font-light text-[#1a1a1a]">
                    Got it! Shrey will be in touch soon.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        ref={linksRef}
        className="px-6 md:px-10 py-10 flex flex-wrap items-center justify-between gap-8"
      >
        <nav className="flex flex-wrap gap-10">
          {[
            { name: "Home", href: "/#home" },
            { name: "About", href: "/#about" },
            { name: "Works", href: "/#works" },
            { name: "Contact", href: "/#contact" }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="link-item text-[17px] tracking-[0.14em] uppercase text-[#1a1a1a]/45 no-underline transition-colors duration-200 hover:text-[#1a1a1a]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="link-item inline-flex items-center gap-3 px-5 py-3 border border-[#1a1a1a]/15">
          <span className="relative flex size-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
            <span className="relative inline-flex w-4 h-4 rounded-full bg-green-500" />
          </span>
          <span className="text-[15px] tracking-[0.18em] uppercase text-[#1a1a1a]/45">
            Available for work
          </span>
        </div>

        <div className="flex items-center gap-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="link-item flex items-center text-[#1a1a1a]/35 transition-colors duration-200 hover:text-[#1a1a1a]"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-16 h-px bg-[#1a1a1a]/[0.08]" />

      <div ref={bottomRef} className="px-16 pt-12 pb-8">
        <div className="flex flex-wrap justify-between gap-2">
          <p className="text-[14px] text-[#1a1a1a]/40 tracking-[0.1em]">
            © 2025 Shrey Sawant — Crafted with intent.
          </p>
          <p className="text-[14px] text-[#1a1a1a]/25 tracking-[0.1em]">
            Mumbai, India · Full Stack + UX
          </p>
        </div>
      </div>
    </footer>
  );
}
