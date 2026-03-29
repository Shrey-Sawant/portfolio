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

