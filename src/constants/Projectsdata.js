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
      heading: "Data Fetching",
      items: [
        { name: "REST APIs", desc: "Complex data consumption from external services." },
        { name: "Axios", desc: "Efficient API handling with async requests and interceptors." },
        { name: "Dynamic UI", desc: "React-driven components updating based on API responses." },
        { name: "State Management", desc: "Optimized rendering using controlled state updates." },
      ],
    },
    highlights: {
      heading: "Interface",
      items: [
        { name: "Search & Filter", desc: "Real-time searching across character datasets." },
        { name: "Responsive", desc: "Seamless experience across all devices." },
        { name: "Lazy Loading", desc: "Efficient loading of large datasets." },
        { name: "Error Handling", desc: "Graceful UI fallbacks for API failures." },
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
      heading: "Advanced Frontend Techniques",
      items: [
        { name: "GSAP", desc: "Advanced animations and timeline control." },
        { name: "ScrollTrigger", desc: "Scroll-based animation orchestration." },
        { name: "Locomotive Scroll", desc: "Smooth scrolling with parallax effects." },
        { name: "Tailwind CSS", desc: "Utility-first styling for rapid UI building." },
        { name: "Responsive Layouts", desc: "Optimized for cross-device compatibility." },
      ],
    },
    highlights: {
      heading: "Performance & Design",
      items: [
        { name: "Modern UI/UX", desc: "Design-focused immersive experience." },
        { name: "Fast Loading", desc: "Optimized assets for performance." },
        { name: "Micro-interactions", desc: "Subtle animations for engagement." },
        { name: "Smooth Navigation", desc: "Fluid transitions between sections." },
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
      heading: "Real-time Architecture",
      items: [
        { name: "Socket.IO", desc: "WebSockets for real-time bidirectional communication." },
        { name: "Node.js", desc: "Backend runtime for handling concurrent connections." },
        { name: "Express", desc: "REST API for user and message management." },
        { name: "MongoDB", desc: "Database for storing chats and user data." },
        { name: "JWT Auth", desc: "Secure authentication using tokens." },
        { name: "Cloudinary", desc: "Image upload and media storage." },
      ],
    },
    highlights: {
      heading: "Key Features",
      items: [
        { name: "Real-time Messaging", desc: "Instant message delivery using sockets." },
        { name: "Persistence", desc: "Messages stored securely in database." },
        { name: "Online Status", desc: "Live user presence indicators." },
        { name: "Typing Indicators", desc: "Real-time typing feedback." },
        { name: "Media Sharing", desc: "Support for sending images in chats." },
        { name: "Scalability", desc: "Separate frontend/backend architecture." },
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
      heading: "Efficient Logic",
      items: [
        { name: "Vanilla JS", desc: "Direct DOM manipulation for performance." },
        { name: "LocalStorage", desc: "Client-side data persistence." },
        { name: "Modular Code", desc: "Structured and maintainable code architecture." },
        { name: "Event Handling", desc: "Dynamic UI updates based on user actions." },
      ],
    },
    highlights: {
      heading: "Productivity",
      items: [
        { name: "Task Management", desc: "Create, update, and delete tasks." },
        { name: "CRUD Operations", desc: "Full lifecycle task handling." },
        { name: "Local Persistence", desc: "Data retained after reload." },
        { name: "User Interaction", desc: "Responsive UI with instant feedback." },
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
      heading: "Human-Centric Tech Stack",
      items: [
        { name: "MERN Stack", desc: "Full-stack secure application architecture." },
        { name: "Redux", desc: "State management for personalized flows." },
        { name: "Authentication", desc: "Secure login and protected routes." },
        { name: "REST APIs", desc: "Backend services for dynamic content." },
      ],
    },
    highlights: {
      heading: "Core Impact",
      items: [
        { name: "Resource Guidance", desc: "Curated mental health content." },
        { name: "User Privacy", desc: "Secure authentication and protection." },
        { name: "Personalization", desc: "Customized wellness recommendations." },
        { name: "Dashboard Tracking", desc: "User progress and activity insights." },
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
      heading: "Biometric Integration",
      items: [
        { name: "InsightFace", desc: "Facial recognition for attendance." },
        { name: "Flask", desc: "Backend serving AI models." },
        { name: "MongoDB", desc: "Database for academic records." },
        { name: "REST APIs", desc: "Frontend-backend communication." },
        { name: "Authentication", desc: "Role-based access control." },
      ],
    },
    highlights: {
      heading: "Academic Management",
      items: [
        { name: "Face Recognition", desc: "Automated attendance tracking." },
        { name: "Virtual Classes", desc: "Online learning environment." },
        { name: "Automation", desc: "Timetable and attendance automation." },
        { name: "Role-Based Dashboards", desc: "Separate admin, teacher, student views." },
      ],
    },
  },
];

projects.forEach((p, i) => {
  const nextProject = projects[(i + 1) % projects.length];
  p.next = { label: nextProject.title, href: `/projects/${nextProject.slug}` };
});

export default projects;