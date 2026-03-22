import project1 from "../assets/academix.png";
import project2 from "../assets/SuperMarket.png";
import project3 from "../assets/portfolio.png";

export const HERO_CONTENT = `I am a highly motivated and enthusiastic web developer with a strong desire to contribute to impactful projects. With hands-on experience building and deploying real web applications using React, Node.js, Express, and modern frontend frameworks, I enjoy crafting user-centric solutions and solving real challenges.`;

export const ABOUT_TEXT = `I’m an aspiring full stack developer who builds real web applications that are deployed online. I am continually learning modern frameworks like React, TailwindCSS, Node.js, Express.js, and databases like MongoDB/MySQL. I build responsive interfaces, integrate backend APIs, and deploy apps using cloud hosting platforms like Vercel and Render.`;

export const EXPERIENCES = [
  {
    year: "2025.04 – 2025.07",
    role: "Web Developer",
    company: "Pentagon Technologies",
    description: `Designed and developed responsive websites using WordPress. Managed and delivered client websites including Pentagon Technologies, Shanti Yoga, Sudarshan Moulds, and Alamiko. Conducted UI/UX research and competitive analysis for a B2B eCommerce platform (Figma prototyping). Focused on SEO optimization, performance tuning, and user experience enhancement.`,
    technologies: ["WordPress", "UI/UX", "SEO", "Figma"],
  },
  {
    year: "2025.01 – 2025.03",
    role: "Web Developer – MERN Stack",
    company: "TechAsia Mechatronics Pvt Ltd",
    description: `Worked as a Full Stack Developer specializing in MERN stack. Developed Smart Energy Meter platform integrating ReactJS, Redux, Node.js, and MongoDB for real-time energy monitoring. Built scalable APIs and optimized database performance. Enhanced application responsiveness and overall system efficiency.`,
    technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Academix",
    image: project1,
    description:
      "Academix is a student management platform featuring class creation, assignment posting, results tracking, and admin-side tools for managing schedules and attendance.",
    technologies: ["React", "Redux", "Node.js", "Express.js", "MongoDB"],
    link: "https://sonder-sigma.vercel.app/",
  },
  {
    title: "Sevakart – Artisans Marketplace",
    image: project2,
    description:
      "Sevakart is an e-commerce platform that empowers rural and tribal artisans in India by helping them showcase and sell handcrafted products online, promoting sustainable practices and cultural heritage.",
    technologies: ["React", "E-commerce", "Handcrafted Marketplace"],
    link: "https://sevakart.vercel.app/",
  },
  {
    title: "Chat Application",
    image: project3,
    description:
      "A real-time chat web app that enables live messaging between users via WebSockets or realtime backend services.",
    technologies: ["React", "Socket.io", "Node.js"],
    link: "https://chatapp-kohl-kappa.vercel.app/",
  },
  {
    title: "Project Management App",
    image: project3,
    description:
      "A project organization and management platform that lets users track tasks, progress, and teams in a web interface.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "https://project-management-app-phi-indol.vercel.app/",
  },
  {
    title: "Getaway Wallet",
    image: project3,
    description:
      "Getaway Wallet is a web-based personal finance dashboard for tracking income, expenses, and overall financial activity through a clean and responsive UI.",
    technologies: ["React", "CSS", "JavaScript", "Finance Dashboard"],
    link: "https://getaway-wallet.vercel.app/",
  },
  {
    title: "Sonder Sigma – Real-Time Design Collaboration",
    image: project1,
    description:
      "Sonder is a real-time collaborative design platform where users can work together on visual designs within shared rooms. It offers fast, interactive editing and team-based collaboration directly in the web browser.",
    technologies: [
      "React",
      "Real-Time Collaboration",
      "WebSockets-style features",
    ],
    link: "https://sonder-sigma.vercel.app/",
  },
];

export const CONTACT = {
  address:
    "713/7th Flr, Shree Shraddha Building, G.D Ambekar Marg, Mumbai – 12, Maharashtra, India",
  phoneNo: "+91 85911 06362",
  email: "shreysawant01@gmail.com",
};
