import project1 from "../assets/academix.png";

const projects = [
  {
    id: "01",
    slug: "strudel-music-sequencer",
    image: project1,
    title: "Strudel Music Sequencer",
    category: "Personal Project / Full Stack",
    desc: "A web-based music sequencer built with React and Web Audio API.",
    year: "2024",
    status: "LIVE · OPEN SOURCE",
    subtitle: "Web Audio Experiments",
    tags: ["React", "Web Audio API", "Tone.js", "TypeScript"],
    technology: {
      heading: "Built with modern tools",
      items: [
        { name: "React",         desc: "Component-driven UI with real-time state updates." },
        { name: "Web Audio API", desc: "Low-level audio scheduling and synthesis." },
        { name: "Tone.js",       desc: "High-level abstractions for musical timing." },
      ],
    },
    highlights: {
      heading: "What makes it special",
      items: [
        { name: "Real-time Sequencing", desc: "Step-sequencer synced to a shared audio clock with sub-ms accuracy." },
        { name: "Visual Feedback",      desc: "Each beat lights up in sync with the audio output." },
        { name: "Modular Design",       desc: "Instruments are hot-swappable without stopping playback." },
      ],
    },
  },
  {
    id: "02",
    slug: "academix-platform",
    image: project1,
    title: "Academix Platform",
    category: "Personal Project / Frontend",
    desc: "An academic resource platform for students to share notes and resources.",
    year: "2023",
    status: "LIVE",
    subtitle: "Student Resource Hub",
    tags: ["Next.js", "Tailwind", "Supabase", "TypeScript"],
    technology: {
      heading: "Built with modern tools",
      items: [
        { name: "Next.js",   desc: "SSR and static generation for fast page loads." },
        { name: "Tailwind",  desc: "Utility-first styling for rapid UI iteration." },
        { name: "Supabase",  desc: "Postgres-backed auth and realtime database." },
      ],
    },
    highlights: {
      heading: "What makes it special",
      items: [
        { name: "Peer Sharing",    desc: "Students upload and discover notes by subject and university." },
        { name: "Smart Search",    desc: "Full-text search across all uploaded resources." },
        { name: "Auth & Profiles", desc: "Secure login with personalised bookmarks and history." },
      ],
    },
  },
  {
    id: "03",
    slug: "portfolio-v2",
    image: project1,
    title: "Portfolio v2",
    category: "Personal Project / Design",
    desc: "A redesigned personal portfolio with smooth scroll interactions.",
    year: "2024",
    status: "LIVE",
    subtitle: "Personal Portfolio",
    tags: ["React", "GSAP", "Tailwind", "Vite"],
    technology: {
      heading: "Built with modern tools",
      items: [
        { name: "React",    desc: "Component architecture for reusable UI sections." },
        { name: "GSAP",     desc: "High-performance scroll-driven animations." },
        { name: "Tailwind", desc: "Consistent design tokens across the entire site." },
      ],
    },
    highlights: {
      heading: "What makes it special",
      items: [
        { name: "Scroll Animations", desc: "Every section reveals with choreographed GSAP timelines." },
        { name: "Dark / Light",      desc: "System-aware theme with a smooth toggle transition." },
        { name: "Performance",       desc: "100 Lighthouse score with lazy-loaded assets." },
      ],
    },
  },
  {
    id: "04",
    slug: "dev-dashboard",
    image: project1,
    title: "Dev Dashboard",
    category: "Personal Project / Full Stack",
    desc: "A developer productivity dashboard with GitHub and Jira integrations.",
    year: "2024",
    status: "IN PROGRESS",
    subtitle: "Developer Productivity",
    tags: ["React", "Node.js", "GitHub API", "Jira API"],
    technology: {
      heading: "Built with modern tools",
      items: [
        { name: "React",      desc: "Responsive dashboard UI with live data widgets." },
        { name: "Node.js",    desc: "Backend proxy for secure API key handling." },
        { name: "GitHub API", desc: "Pull requests, issues, and commit activity feeds." },
      ],
    },
    highlights: {
      heading: "What makes it special",
      items: [
        { name: "Unified Inbox",  desc: "PRs, tickets, and CI status in one focused view." },
        { name: "Custom Widgets", desc: "Drag-and-drop layout to prioritise what matters." },
        { name: "Live Sync",      desc: "Polling and webhooks keep data fresh without refresh." },
      ],
    },
  },
];

// Auto-wire next project links using slugs
projects.forEach((p, i) => {
  const nextProject = projects[(i + 1) % projects.length];
  p.next = { label: nextProject.title, href: `/projects/${nextProject.slug}` };
});

export default projects;