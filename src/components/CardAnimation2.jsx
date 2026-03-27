import checker from "../assets/checker.png";
import arrow from "../assets/arrow.png";
import square from "../assets/square.png";
import { useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── DATA ─────────────────────────────────────────────
const Cards = [
  {
    title: "Strategy",
    img: checker,
    bg: "bg-[#E5DAF6]",
    backBg: "#f5f0fb",
  },
  {
    title: "Design",
    img: arrow,
    bg: "bg-[#FFD2F3]",
    backBg: "#fff5fd",
  },
  {
    title: "Build",
    img: square,
    bg: "bg-[#FCDCA6]",
    backBg: "#fffbf0",
  },
];

// ─── CARD ─────────────────────────────────────────────
const Card = forwardRef(function Card({ bg, backBg, title, img }, ref) {
  const floatRef = useRef(null);

  return (
    <div
      ref={ref}
      className="absolute will-change-transform"
      style={{
        width: 340,
        height: 520,
        transformStyle: "preserve-3d",
      }}
    >
      {/* FRONT */}
      <div
        ref={floatRef}
        className={`absolute inset-0 rounded-2xl flex flex-col justify-between shadow-xl ${bg}`}
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="flex justify-between items-start p-5">
          <p className="text-[11px] font-bold uppercase tracking-widest">
            {title}
          </p>
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
          <p
            className="text-[11px] font-bold uppercase tracking-widest opacity-80"
            style={{ transform: "rotate(180deg)" }}
          >
            {title}
          </p>
        </div>
      </div>

      {/* BACK */}
      <div
        className="absolute inset-0 rounded-2xl flex flex-col shadow-xl overflow-hidden"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          backgroundColor: backBg,
        }}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b border-black/10">
          <p className="text-[11px] font-bold uppercase tracking-widest text-black/70">
            {title}
          </p>
          <img src={img} className="w-5 h-5 opacity-70" alt="" />
        </div>

        <div className="flex flex-col gap-[6px] px-4 py-4 flex-1">
          {["Service A", "Service B", "Service C"].map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-xl px-4 py-[10px] text-[13px] font-medium text-black/75"
              style={{ backgroundColor: "rgba(0,0,0,0.055)" }}
            >
              {s}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center px-5 py-4 border-t border-black/10">
          <img src={img} className="w-4 h-4 opacity-50" alt="" />
          <p
            className="text-[11px] font-bold uppercase tracking-widest opacity-50"
            style={{ transform: "rotate(180deg)" }}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
});

// ─── MAIN ─────────────────────────────────────────────
const CardAnimation2 = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      cards.forEach((card, index) => {
        const position = 2 - index - 1;

        const rotationZValues = [12, 0, -12];
        const rotationZValuesAnimated = [5, 0, -5];

        tl.to(
          card,
          {
            force3D: true,
            keyframes: {
              // START OFF-SCREEN
              "0%": {
                y: () => -0.75 * window.innerHeight,
                x: () => -position * (card.offsetWidth * 1.2),
                scale: 0.2,
                rotationZ: rotationZValues[index],
                rotateX: 24,
              },

              // MOVE DOWN + SCALE
              "40%": {
                y: "20%",
                scale: 0.8,
                rotationZ: rotationZValuesAnimated[index],
                rotateX: 0,
                rotationY: 0,
              },

              // CENTER + PREPARE TO FLIP
              "55%": {
                y: 0,
                x: () => gsap.getProperty(card, "x"),
                rotateY: 0,
              },

              // FLIP
              "75%": {
                rotationY: -190,
                scale: 1,
                rotationZ: 0,
              },

              "82%": {
                rotationY: -180,
              },

              // FINAL HOVER FLOAT
              "100%": {
                rotationZ: 0,
              },
            },
            ease: "none",
          },
          index * 0.12
        );
      });

      // ScrollTrigger to control the timeline
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: true,
        animation: tl,
      });

      // Floating animation after scroll completes
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { yPercent: -2 },
          {
            yPercent: 2,
            duration: () => gsap.utils.random(1.5, 2.5),
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-center justify-center min-h-[350vh]"
      style={{ perspective: "1400px" }}
    >
      <div className="relative flex items-center justify-center w-full h-screen sticky top-0">
        {Cards.map((card, index) => (
          <Card
            key={index}
            {...card}
            ref={(el) => (cardRefs.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
};

export default CardAnimation2;