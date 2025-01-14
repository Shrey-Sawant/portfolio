import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { motion } from "motion/react"; 
import { animate } from "motion";

const iconVariants=(duration)=>({
  intial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
    duration:duration,
    ease:"linear",
    repeat:Infinity,
    repeatType:"reverse"
  }}
})

const Technologies = () => {
  return (
    <div className="border-b border-x-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="overflow-hidden my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      intial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(2.5)}
        intial="intial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-700"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        intial="intial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-blue-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        intial="intial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        intial="intial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-600"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        intial="intial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(7)}
        intial="intial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-white-400"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies;
