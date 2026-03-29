import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const projects = [
  {
    id: "01",
    slug: "marvel-reimagined",
    image: project1,
    liveUrl: "https://marvel-reimagined.vercel.app/",
    title: "Marvel Reimagined",
    category: "Frontend / API",
    desc: "A character discovery platform exploring the Marvel Universe using official REST APIs.",
    year: "2024",
    status: "COMPLETED",
    subtitle: "API Exploration",
    tags: ["React", "Marvel API", "Axios", "JavaScript"],

    technology: {
      heading: "Frontend Architecture",
      items: [
        { name: "Component Design", desc: "Reusable React components for scalable UI structure." },
        { name: "API Integration", desc: "Seamless integration with Marvel API for dynamic content." },
        { name: "State Optimization", desc: "Efficient state updates for smooth rendering." },
        { name: "Routing", desc: "Dynamic routing for character detail navigation." },
      ],
    },

    highlights: {
      heading: "User Experience",
      items: [
        { name: "Character Exploration", desc: "Browse and discover Marvel characters interactively." },
        { name: "Search Experience", desc: "Fast and responsive character lookup." },
        { name: "Visual UI", desc: "Clean and minimal layout focused on content." },
        { name: "Performance Handling", desc: "Optimized loading for large datasets." },
      ],
    },
  },

  {
    id: "02",
    slug: "awwwards",
    image: project2,
    liveUrl: "https://awwwards-two-kappa.vercel.app/",
    title: "Awwwards",
    category: "Frontend / Design",
    desc: "An interactive website featuring modern UI/UX design, smooth scroll animations, and immersive visual effects.",
    year: "2025",
    status: "LIVE",
    subtitle: "Premium Design Experience",
    tags: ["React", "GSAP", "Locomotive Scroll", "Tailwind"],

    technology: {
      heading: "Animation Engineering",
      items: [
        { name: "GSAP Timelines", desc: "Advanced animation sequencing and control." },
        { name: "Scroll Systems", desc: "Scroll-driven animations with precise triggers." },
        { name: "Smooth Scrolling", desc: "Enhanced UX using locomotive scroll." },
        { name: "Responsive Design", desc: "Adaptive layouts across all screen sizes." },
      ],
    },

    highlights: {
      heading: "Visual Experience",
      items: [
        { name: "Immersive Animations", desc: "Fluid transitions inspired by award-winning sites." },
        { name: "Micro Interactions", desc: "Subtle UI feedback enhancing usability." },
        { name: "Creative Layouts", desc: "Non-traditional design patterns." },
        { name: "High Performance", desc: "Optimized animations without lag." },
      ],
    },
  },

  {
    id: "03",
    slug: "chatapp-realtime",
    image: project3,
    liveUrl: "https://chatapp-kohl-kappa.vercel.app/",
    title: "Real-time ChatApp",
    category: "Full Stack / Real-time",
    desc: "A full-stack real-time chat application with secure authentication and persistent storage.",
    year: "2025",
    status: "LIVE",
    subtitle: "Instant Communication",
    tags: ["Socket.IO", "Node.js", "Express", "MongoDB", "Vercel"],

    technology: {
      heading: "Real-time Systems",
      items: [
        { name: "WebSockets", desc: "Bi-directional communication using Socket.IO." },
        { name: "Authentication Flow", desc: "Secure login with JWT-based sessions." },
        { name: "Database Design", desc: "Structured MongoDB schema for chats." },
        { name: "Media Handling", desc: "Cloud storage integration for images." },
      ],
    },

    highlights: {
      heading: "Messaging Features",
      items: [
        { name: "Instant Messaging", desc: "Real-time communication with low latency." },
        { name: "User Presence", desc: "Online/offline status tracking." },
        { name: "Typing Feedback", desc: "Live typing indicators." },
        { name: "Media Sharing", desc: "Send and receive images in chats." },
      ],
    },
  },

  {
    id: "04",
    slug: "project-management-app",
    image: project4,
    liveUrl: "https://project-management-app-phi-indol.vercel.app/",
    title: "Project Management App",
    category: "Web App / Productivity",
    desc: "A streamlined project management tool for tracking tasks and coordinating team efforts.",
    year: "2023",
    status: "COMPLETED",
    subtitle: "Task Coordination",
    tags: ["JavaScript", "HTML/CSS", "LocalStorage"],

    technology: {
      heading: "Core Logic",
      items: [
        { name: "State Handling", desc: "Efficient DOM updates using vanilla JS." },
        { name: "Local Persistence", desc: "Data storage using browser localStorage." },
        { name: "Modular Structure", desc: "Organized code for maintainability." },
        { name: "Event Driven UI", desc: "Dynamic updates based on user actions." },
      ],
    },

    highlights: {
      heading: "Task Workflow",
      items: [
        { name: "Task Lifecycle", desc: "Create, edit, and delete tasks easily." },
        { name: "Interactive UI", desc: "Instant feedback on user actions." },
        { name: "Offline Support", desc: "Works without backend dependency." },
        { name: "Simple UX", desc: "Minimal and distraction-free interface." },
      ],
    },
  },

  {
    id: "05",
    slug: "sonder",
    image: project5,
    liveUrl: "https://sonder-sigma.vercel.app/",
    title: "Sonder",
    category: "Full Stack / HealthTech",
    desc: "A mental health platform supporting students with curated resources and tracking.",
    year: "2024",
    status: "COMPLETED",
    subtitle: "Student Wellness Guide",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Redux"],

    technology: {
      heading: "Full Stack System",
      items: [
        { name: "MERN Stack", desc: "End-to-end full stack architecture." },
        { name: "Global State", desc: "Redux for predictable state management." },
        { name: "Secure Auth", desc: "Protected routes and user sessions." },
        { name: "API Layer", desc: "Backend services powering dynamic data." },
      ],
    },

    highlights: {
      heading: "User Impact",
      items: [
        { name: "Mental Health Support", desc: "Curated resources for students." },
        { name: "Personal Dashboard", desc: "Track activities and progress." },
        { name: "Privacy Focused", desc: "Secure handling of user data." },
        { name: "Guided Experience", desc: "Structured user journey." },
      ],
    },
  },

  {
    id: "06",
    slug: "academix-platform",
    image: project6,
    liveUrl: "https://academix-ruby.vercel.app/",
    title: "Academix",
    category: "Full Stack / AI Integration",
    desc: "A digital student management platform with AI-powered automation.",
    year: "2024",
    status: "LIVE",
    subtitle: "AI-Powered EdTech",
    tags: ["Flask", "React", "InsightFace", "MongoDB", "Python"],

    technology: {
      heading: "AI + Web Integration",
      items: [
        { name: "Face Recognition", desc: "AI-powered attendance using InsightFace." },
        { name: "Backend Services", desc: "Flask APIs serving ML models." },
        { name: "Database Design", desc: "MongoDB for academic records." },
        { name: "Role Management", desc: "Access control for different users." },
      ],
    },

    highlights: {
      heading: "Smart Features",
      items: [
        { name: "Automated Attendance", desc: "Face recognition replaces manual tracking." },
        { name: "Role Dashboards", desc: "Custom views for students and teachers." },
        { name: "Virtual Learning", desc: "Integrated academic workflows." },
        { name: "Process Automation", desc: "Reduced manual administrative work." },
      ],
    },
  },
];

projects.forEach((p, i) => {
  const nextProject = projects[(i + 1) % projects.length];
  p.next = { label: nextProject.title, href: `/projects/${nextProject.slug}` };
});

export default projects;