import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full flex flex-col items-center justify-center px-6 md:px-20 gap-8 md:gap-10">
      <h2 className="text-2xl md:text-3xl text-center md:text-left tracking-wide font-normal">
        The Narrative: Engineering x Product x Design
      </h2>
      <p className="text-lg md:text-xl tracking-wider font-light font-mono md:px-20 text-center md:text-left">
        I am a Full Stack Developer and Product Builder dedicated to
        architecting high-performance, user-centric systems. My approach bridges
        the gap between technical complexity and business outcomes, ensuring
        every line of code serves a strategic purpose.
      </p>
      <p className="text-lg md:text-xl tracking-wider font-light font-mono md:px-20 text-center md:text-left">
        Whether I’m optimizing REST APIs for real-time energy monitoring or
        engineering AI-driven facial recognition systems, I prioritize
        scalability and seamless user experiences. With a foundation in Computer
        Engineering and a track record of academic excellence—ranking 1st in my
        department for three consecutive years—I bring a disciplined, analytical
        mindset to every project.
      </p>
    </div>
  );
};

export default About;

// import { ABOUT_TEXT } from "../constants"
// import { motion  } from "motion/react"
// import about from "../assets/aboutMe.png";

// const About = () => {
//     return (
//         <div className="border-b border-x-neutral-900 pb-4">
//             <h1 className="overflow-hidden my-20 text-center text-4xl">About
//                 <span className="text-neutral-500"> Me</span>
//             </h1>
//             <div className="flex flex-wrap">
//                 <motion.div
//                 whileInView={{opacity:1,x:0}}
//                 initial={{opacity:0,x:-100}}
//                 transition={{duration:0.5}}
//                 className="w-full lg:w-1/2 lg:p-8">
//                     <div className="flex items-center justify-center">
//                         <img className="rounded-2xl" src={about} alt="about" />
//                     </div>
//                 </motion.div>
//                 <motion.div
//                 whileInView={{opacity:1,x:0}}
//                 initial={{opacity:0,x:100}}
//                 transition={{duration:0.5}}
//                 className="w-full lg:w-1/2">
//                     <div className="flex justify-center lg:justify-start">
//                         <p className="overflow-hidden my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
//                     </div>
//                 </motion.div>
//             </div>
//         </div>
//     )
// }

// export default About
