import checker from "../../assets/checker.png";
import arrow from "../../assets/arrow.png";
import square from "../../assets/square.png";
import { useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cards = [
  { title: "Frontend", img: checker, bg: "bg-[#E5DAF6]", delay: 0 },
  { title: "Design", img: arrow, bg: "bg-[#FFD2F3]", delay: 0.8 },
  { title: "TOOLS & CONCEPTS", img: square, bg: "bg-[#FCDCA6]", delay: 1.6 },
];

const CARD_BACKS = [
  {
    label: "Frontend",
    icon: checker,
    items: [
      "React js",
      "Next js", 
      "Redux", 
      "Gsap", 
      "Framer",
      "Tailwind CSS", 
    ],
  },
  {
    label: "Backend",
    icon: arrow,
    items: [
      "Node js",
      "Express js",
      "Flask",
      "REST APIs",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    label: "TOOLS & CONCEPTS",
    icon: square,
    items: [
      "Git & GitHub",
      "Vercel & Render",
      "Hostinger & Godaddy",
      "Socket IO",
      "Figma",
      "WordPress",
    ],
  },
];

const START_STACKED = [
  { x: -10, y: -200, rotation: -4, zIndex: 1, opacity: 0, scale: 0.6 },
  { x: 0, y: -200, rotation: 0, zIndex: 3, opacity: 0, scale: 0.6 },
  { x: 10, y: -200, rotation: 4, zIndex: 2, opacity: 0, scale: 0.6 },
];

const LAND_STACKED = [
  { x: -40, y: 0, rotation: -6, zIndex: 1, opacity: 1, scale: 1.3 },
  { x: 0, y: 0, rotation: 0, zIndex: 3, opacity: 1, scale: 1.4 },
  { x: 40, y: 0, rotation: 6, zIndex: 2, opacity: 1, scale: 1.3 },
];

const FLIP_DIRECTION = [-180, 180, 180];

const CardBack = ({ label, icon, items }) => (
  <div
    className="absolute inset-0 rounded-lg flex flex-col justify-between shadow-md overflow-hidden bg-white"
    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
  >
    <div className="flex justify-between items-center px-3 pt-3 pb-1">
      <p className="text-[6px] md:text-[10px] font-bold uppercase tracking-widest">{label}</p>
      <img src={icon} alt={label} className="size-3" />
    </div>

    <div className="flex flex-col gap-y-1 px-3 py-1 flex-1 justify-center">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center justify-center py-1.5 rounded-sm"
          style={{ backgroundColor: "#e7e7e7" }}
        >
          <p className="text-[7px] md:text-[10px] font-medium tracking-tight text-center">
            {item}
          </p>
        </div>
      ))}
    </div>

    <div
      className="flex justify-between items-center px-3 pt-1 pb-3"
      style={{ transform: "rotate(180deg)" }}
    >
      <img src={icon} alt={label} className="size-3" />
      <p className="text-[6px] font-bold uppercase tracking-widest">{label}</p>
    </div>
  </div>
);

const Card = forwardRef(function Card({ bg, title, img, delay, back }, ref) {
  const floatRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(floatRef.current, {
        y: -15,
        rotation: 1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay,
      });
    });
    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="h-60 w-44 will-change-transform absolute"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={floatRef}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          data-flip="true"
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className={`absolute inset-0 rounded-lg flex flex-col gap-y-10 items-center justify-center shadow-md ${bg}`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="w-full flex justify-between items-center p-4">
              <p className="p-2 text-[6px] font-bold uppercase tracking-tighter">
                {title}
              </p>
              <img src={checker} alt="Checker" className="size-3" />
            </div>
            <img src={img} alt="Card" className="size-16" />
            <div className="w-full flex justify-between items-center p-4">
              <span className="flex gap-3 items-end">
                <img src={img} alt="Icon" className="size-3" />
                <p className="text-[4px] font-bold uppercase tracking-tighter font-mono">
                  nvl-101
                </p>
              </span>
              <p className="p-2 text-[6px] rotate-180 font-bold uppercase tracking-tighter">
                {title}
              </p>
            </div>
          </div>

          <CardBack
            label={back.label}
            icon={back.icon}
            items={back.items}
            bg={bg}
          />
        </div>
      </div>
    </div>
  );
});

const CardAnimation2 = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return;

    const flipWrappers = cards.map((card) =>
      card.querySelector("[data-flip='true']"),
    );

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      const buildTimeline = (isSmall) => {
        cards.forEach((card, i) => gsap.set(card, START_STACKED[i]));

        const tl = gsap.timeline();

        tl.to(
          cards,
          {
            x: (i) => LAND_STACKED[i].x,
            y: (i) => LAND_STACKED[i].y,
            rotation: (i) => LAND_STACKED[i].rotation,
            zIndex: (i) => LAND_STACKED[i].zIndex,
            opacity: 1,
            scale: (i) => LAND_STACKED[i].scale,
            ease: "power2.out",
            stagger: { each: 0.15, from: "center" },
            duration: 2.2,
          },
          0,
        );

        const dynamicLineState = isSmall
          ? [
              { x: 250, y: -400, rotation: 0, zIndex: 1, scale: 1.5 },
              { x: 0, y: 0, rotation: 0, zIndex: 3, scale: 1.5 },
              { x: -250, y: 400, rotation: 0, zIndex: 2, scale: 1.5 },
            ]
          : [
              { x: -100, y: 0, rotation: 0, zIndex: 1, scale: 2.0 },
              { x: 0, y: 0, rotation: 0, zIndex: 3, scale: 2.0 },
              { x: 100, y: 0, rotation: 0, zIndex: 2, scale: 2.0 },
            ];

        tl.to(
          cards,
          {
            x: (i) => dynamicLineState[i].x,
            y: (i) => dynamicLineState[i].y,
            rotation: (i) => dynamicLineState[i].rotation,
            zIndex: (i) => dynamicLineState[i].zIndex,
            scale: (i) => dynamicLineState[i].scale,
            ease: "power3.inOut",
            stagger: { each: 0.12, from: "center" },
            duration: 1.2,
          },
          "unstack",
        );

        const flipOrigins = ["0% 50%", "50% 50%", "100% 50%"];
        const flipOrder = [0, 1, 2];

        flipOrder.forEach((cardIndex, step) => {
          gsap.set(flipWrappers[cardIndex], {
            transformOrigin: flipOrigins[cardIndex],
          });

          tl.to(
            flipWrappers[cardIndex],
            {
              rotateY: FLIP_DIRECTION[cardIndex],
              ease: "power2.inOut",
              duration: 0.9,
            },
            `unstack+=${step * 0.35}`,
          );
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: isSmall ? "top top" : "top 30%",
          end: "+=200",
          scrub: 1.5,
          pin: true,
          pinSpacing: false,
          pinType: "transform",
          anticipatePin: 1,
          animation: tl,
        });
      };

      mm.add("(max-width: 1023px)", () => {
        buildTimeline(true);
      });

      mm.add("(min-width: 1024px)", () => {
        buildTimeline(false);
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-mono text-center translate-y-20 md:translate-y-40 z-10">Skills</h2>
      <section
        ref={sectionRef}
        className="relative w-full max-lg:min-h-[1400px] lg:min-h-[900px] flex items-center justify-center bg-[#e7e7e7]"
      >
        <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
          {Cards.map((card, index) => (
            <Card
              key={index}
              bg={card.bg}
              title={card.title}
              img={card.img}
              delay={card.delay}
              back={CARD_BACKS[index]}
              ref={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CardAnimation2;
