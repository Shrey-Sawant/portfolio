import { forwardRef } from "react";
import checker from "../assets/checker.png";
import arrow from "../assets/arrow.png";
import square from "../assets/square.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cards = [
  { title: "Strategy", img: checker, bg: "bg-[#E5DAF6]", delay: 0 },
  { title: "Design",   img: arrow,   bg: "bg-[#FFD2F3]", delay: 0.8 },
  { title: "Build",    img: square,  bg: "bg-[#FCDCA6]", delay: 1.6 },
];

const SPREAD_STATE = [
  { x: -180, y:  0, rotation: -18, zIndex: 1 },
  { x:   0, y: -20, rotation:   0, zIndex: 3 },
  { x: 180, y:  0, rotation:  18, zIndex: 2 },
];
const STACK_STATE = [
  { x: -14, y: 80, rotation: -5, zIndex: 1 },
  { x:   0, y: 60, rotation:  0, zIndex: 3 },
  { x:  14, y: 80, rotation:  5, zIndex: 2 },
];

const Card = forwardRef(({ bg, title, img, delay }, ref) => {
  const cardInnerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(cardInnerRef.current, {
        y: -15,
        rotation: 1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay,
      });
    }, ref);
    return () => ctx.revert();
  }, [delay, ref]);

  return (
    <div className="h-60 w-44 flex-shrink-0" ref={ref}>
      <div
        className={`h-full rounded-lg flex flex-col gap-y-10 items-center justify-center ${bg}`}
        ref={cardInnerRef}
      >
        <div className="w-full flex justify-between items-center p-4">
          <p className="text-[6px] font-bold uppercase">{title}</p>
          <img src={img} alt={`${title} icon`} className="w-3 h-3" />
        </div>
        <img src={img} alt={`${title} illustration`} className="w-16 h-16" />
        <div className="w-full flex justify-between items-center p-4">
          <span className="flex gap-3 items-end">
            <img src={img} alt={`${title} icon`} className="w-3 h-3" />
            <p className="text-[4px] font-bold uppercase font-mono">nvl-101</p>
          </span>
          <p className="text-[6px] font-bold uppercase rotate-180">{title}</p>
        </div>
      </div>
    </div>
  );
});

export default Card;
