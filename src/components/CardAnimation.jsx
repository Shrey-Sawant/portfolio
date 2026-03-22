import checker from "../assets/checker.png";
import arrow from "../assets/arrow.png";
import square from "../assets/square.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cards = [
  { title: "Strategy", img: checker, bg: "bg-[#E5DAF6]", delay: 0 },
  { title: "Design", img: arrow, bg: "bg-[#FFD2F3]", delay: 0.8 },
  { title: "Build", img: square, bg: "bg-[#FCDCA6]", delay: 1.6 },
];

const SPREAD_STATE = [
  { x: -180, y: 0, rotation: -18, zIndex: 1 },
  { x: 0, y: -20, rotation: 0, zIndex: 3 },
  { x: 180, y: 0, rotation: 18, zIndex: 2 },
];

const STACK_STATE = [
  { x: -14, y: 80, rotation: -5, zIndex: 1 },
  { x: 0, y: 60, rotation: 0, zIndex: 3 },
  { x: 14, y: 80, rotation: 5, zIndex: 2 },
];

const Card = ({ bg, title, img, delay }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(cardRef.current, {
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
    <div className="h-60 w-44 ">
      <div
        className={`h-full rounded-lg flex flex-col gap-y-10 items-center justify-center ${bg}`}
        ref={cardRef}
      >
        <div className="w-full flex justify-between items-center p-4">
          <p className="p-2 text-[6px] font-bold uppercase tracking-tighter">
            {title}
          </p>
          <img src={checker} alt="Checker" className="size-3" />
        </div>
        <img src={img} alt="Card Image" className="size-16 " />
        <div className="w-full flex justify-between items-center p-4">
          <span className="flex gap-3 items-end">
            <img src={img} alt="Checker" className="size-3" />
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
};

const CardAnimation = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardRef = useRef([]);

  useEffect(() => {
    const cards = cardRef.current;

    cards.forEach((card, index) => {
      gsap.set(card, SPREAD_STATE[index]);
    }, []);

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        gsap.to(card, {
          x: STACK_STATE[i].x,
          y: STACK_STATE[i].y,
          rotation: STACK_STATE[i].rotation,
          zIndex: STACK_STATE[i].zIndex,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 10%",
            scrub: 2,
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
        <section ref={sectionRef} className="relative">
    <div className="flex justify-center items-center gap-8 ">
      {Cards.map((card, index) => (
        <Card
          key={index}
          bg={card.bg}
          title={card.title}
          img={card.img}
          delay={card.delay}
          ref={(el) => (cardRef.current[index] = el)}
        />
      ))}
    </div>
  </section>
  );
};

export default CardAnimation;
