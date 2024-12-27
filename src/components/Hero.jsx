import { HERO_CONTENT } from "../constants/index.js";
import { delay, motion } from "motion/react";
import profile from "../assets/profile.png";

const container = (delay) =>( {
  hidden: { x: -100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay},
  }
});

const Hero = () => {
  return (
    <div className="border-b border-x-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="wrap w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="overflow-hidden pb-16 text-6xl font-thin tracking-tight lg:top-16 lg:text-8xl">Shrey Sawant</motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="overflow-hidden my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 lg:pt-0">
          <div className="flex justify-center w-85 h-85">
            <motion.img 
            className="rounded-2xl h-full w-full"
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            src={profile} alt="Shrey Sawant" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero