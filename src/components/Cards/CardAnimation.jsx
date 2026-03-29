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

const LINE_STATE = [
  { x: -200, y: 0, rotation: 0, zIndex: 1 },
  { x: 0,    y: 0, rotation: 0, zIndex: 3 },
  { x: 200,  y: 0, rotation: 0, zIndex: 2 },
];

const STACK_STATE = [
  { x: -10, y: 0, rotation: -4, zIndex: 1 },
  { x: 0,   y: 0, rotation: 0,  zIndex: 3 },
  { x: 10,  y: 0, rotation: 4,  zIndex: 2 },
];

const EXIT_STATE = [
  { y: 120, opacity: 0 },
  { y: 110, opacity: 0 },
  { y: 120, opacity: 0 },
];

const Card = forwardRef(function Card({ bg, title, img, delay }, ref) {
  const innerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(innerRef.current, {
        y:        -15,
        rotation:  1,
        duration:  1.5,
        repeat:   -1,
        yoyo:      true,
        ease:      "sine.inOut",
        delay,
      });
    });
    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className="h-60 w-44 will-change-transform absolute">
      <div
        ref={innerRef}
        className={`h-full rounded-lg flex flex-col gap-y-10 items-center justify-center shadow-md ${bg}`}
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
    </div>
  );
});

const CardAnimation = () => {
  const sectionRef = useRef(null);
  const cardRefs   = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      const isSmall = window.innerWidth < 1024;
      const dynamicLineState = isSmall ? [
        { x: 0, y: -200, rotation: 0, zIndex: 1 },
        { x: 0, y: 0,   rotation: 0, zIndex: 3 },
        { x: 0, y: 200, rotation: 0, zIndex: 2 },
      ] : [
        { x: -200, y: 0, rotation: 0, zIndex: 1 },
        { x: 0,    y: 0, rotation: 0, zIndex: 3 },
        { x: 200,  y: 0, rotation: 0, zIndex: 2 },
      ];

      cards.forEach((card, i) => {
        gsap.set(card, { ...dynamicLineState[i], opacity: 1 });
      });

      const tl = gsap.timeline();

      tl.to(cards, {
        x:        (i) => STACK_STATE[i].x,
        y:        (i) => STACK_STATE[i].y,
        rotation: (i) => STACK_STATE[i].rotation,
        zIndex:   (i) => STACK_STATE[i].zIndex,
        ease:     "power3.inOut",
        stagger:  { each: 0.06, from: "center" },
        duration: 1.6,
      }, 0);

      cards.forEach((card, i) => {
        tl.to(card, {
          y:        EXIT_STATE[i].y,
          opacity:  EXIT_STATE[i].opacity,
          ease:     "power2.in",
          duration: 1,
        }, 1);
      });

      ScrollTrigger.create({
        trigger:   sectionRef.current,
        start:     "top 50%",
        end:       "+=100",
        scrub:     1,
        pin:       true,
        animation: tl,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-center justify-center"
    >
      <div className="relative flex items-center justify-center w-full h-60 overflow-hidden">
        {Cards.map((card, index) => (
          <Card
            key={index}
            bg={card.bg}
            title={card.title}
            img={card.img}
            delay={card.delay}
            ref={(el) => (cardRefs.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
};

export default CardAnimation;
