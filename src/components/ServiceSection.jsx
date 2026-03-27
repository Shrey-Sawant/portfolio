import { useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";
import checker from "../assets/checker.png";
import arrow from "../assets/arrow.png";
import square from "../assets/square.png";

// ─── SERVICE CARDS DATA ─────────────────────────────
const ServiceCards = [
  {
    title: "Strategy",
    img: checker,
    bg: "bg-[#E5DAF6]",
    backBg: "#f5f0fb",
    services: ["Visual Research", "Mitbewerber Analyse", "Wireframes", "Content Mapping", "User Flow", "Konzepte"],
  },
  {
    title: "Design",
    img: arrow,
    bg: "bg-[#FFD2F3]",
    backBg: "#fff5fd",
    services: ["Unternehmenswebsites", "Marketing Websites", "Design System", "Animation", "Design Support", "Barrierefreies Design"],
  },
  {
    title: "Build",
    img: square,
    bg: "bg-[#FCDCA6]",
    backBg: "#fffbf0",
    services: ["Webflow Entwicklung", "Web Animation", "Webflow CMS", "Barrierefreie Entwicklung", "Technisches SEO", "Frontend Support"],
  },
];

// ─── CARD COMPONENT ─────────────────────────────
const ServiceCard = forwardRef(({ title, img, bg, backBg, services }, ref) => {
  const floatRef = useRef(null);

  useEffect(() => {
    // Floating effect
    const ctx = gsap.context(() => {
      gsap.fromTo(
        floatRef.current,
        { yPercent: -3 },
        { yPercent: 3, duration: () => gsap.utils.random(1.5, 2.5), ease: "sine.inOut", repeat: -1, yoyo: true }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="absolute will-change-transform" style={{ width: 340, height: 520, transformStyle: "preserve-3d" }}>
      {/* FRONT */}
      <div
        ref={floatRef}
        className={`absolute inset-0 rounded-2xl flex flex-col justify-between shadow-xl ${bg}`}
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="flex justify-between items-start p-5">
          <p className="text-[11px] font-bold uppercase tracking-widest">{title}</p>
          <img src={img} className="w-5 h-5 opacity-80" alt="" />
        </div>
        <div className="flex justify-center items-center flex-1">
          <img src={img} className="w-20 h-20 opacity-60" alt="" />
        </div>
        <div className="flex justify-between items-end p-5">
          <span className="flex items-center gap-2">
            <img src={img} className="w-4 h-4 opacity-60" alt="" />
            <p className="text-[9px] font-mono opacity-60">nvl-101</p>
          </span>
          <p className="text-[11px] font-bold uppercase tracking-widest opacity-80" style={{ transform: "rotate(180deg)" }}>{title}</p>
        </div>
      </div>

      {/* BACK */}
      <div
        className="absolute inset-0 rounded-2xl flex flex-col shadow-xl overflow-hidden"
        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", backgroundColor: backBg }}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b border-black/10">
          <p className="text-[11px] font-bold uppercase tracking-widest text-black/70">{title}</p>
          <img src={img} className="w-5 h-5 opacity-70" alt="" />
        </div>
        <div className="flex flex-col gap-[6px] px-4 py-4 flex-1">
          {services.map((s, i) => (
            <div key={i} className="flex items-center justify-center rounded-xl px-4 py-[10px] text-[13px] font-medium text-black/75" style={{ backgroundColor: "rgba(0,0,0,0.055)" }}>
              {s}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center px-5 py-4 border-t border-black/10">
          <img src={img} className="w-4 h-4 opacity-50" alt="" />
          <p className="text-[11px] font-bold uppercase tracking-widest opacity-50" style={{ transform: "rotate(180deg)" }}>{title}</p>
        </div>
      </div>
    </div>
  );
});

// ─── SERVICE SECTION ANIMATION ─────────────────────────────
const ServiceSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const timelineRef = useRef(null);

  const handleProgress = (e) => {
    const { progress } = e.detail;
    timelineRef.current?.progress(progress);
  };

  useEffect(() => {
    window.addEventListener("progressService", handleProgress);

    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return;

    const createTimeline = () => {
      timelineRef.current?.kill();
      gsap.set(cards, { clearProps: "all" });

      timelineRef.current = gsap.timeline({ paused: true });

      cards.forEach((card, index) => {
        const position = 2 - index - 1; // spread out initially
        const rotationZValues = [12, 0, -12];
        const rotationZValuesAnimated = [5, 0, -5];

        timelineRef.current.to(
          card,
          {
            force3D: true,
            keyframes: {
              "0%": { 
                y: () => -0.75 * window.innerHeight + 1,
                x: () => -position * (card.offsetWidth * 1.15),
                scale: 0.2,
                rotationZ: rotationZValues[index],
                rotateX: 24,
              },
              "40%": {
                y: "20%",
                scale: 0.8,
                rotationZ: rotationZValuesAnimated[index],
                rotationY: 0,
                rotateX: 0,
              },
              "55%": { rotationY: 0, y: 0, x: () => gsap.getProperty(card, "x") },
              "75%": { x: 0, rotationZ: 0, rotationY: -190, scale: 1 },
              "82%": { rotationY: -180 },
              "100%": { rotationZ: 0 },
            },
          },
          index * 0.012
        );
      });
    };

    createTimeline();

    return () => window.removeEventListener("progressService", handleProgress);
  }, []);

  return (
    <section
      ref={sectionRef}
      data-scroll
      data-scroll-offset="5%, 75%"
      data-scroll-event-progress="progressService"
      data-service-animation
      className="relative w-full min-h-[350vh]"
      style={{ perspective: "1400px" }}
    >
      <div className="service_container sticky top-0 min-h-screen flex items-center justify-center">
        {ServiceCards.map((card, i) => (
          <ServiceCard key={i} {...card} ref={(el) => (cardRefs.current[i] = el)} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;