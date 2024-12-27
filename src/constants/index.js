import project1 from "../assets/academix.png";
import project2 from "../assets/SuperMarket.png";
import project3 from "../assets/portfolio.png";

export const HERO_CONTENT = `I am a highly motivated and enthusiastic beginner in web development, driven by a strong desire to contribute meaningfully to an innovative team. With a solid foundation in coding principles, I am eager to delve into modern technologies, collaborate on impactful projects, and continually enhance my skill set. My goal is to grow into a proficient web developer who delivers high-quality, user-centric digital solutions. I am committed to leveraging my learning mindset, creativity, and dedication to contribute to the success of the team and create exceptional online experiences.`;

export const ABOUT_TEXT = `I am an enthusiastic and eager-to-learn aspiring full stack developer with a strong passion for creating efficient and user-friendly web applications. While I am new to the field, I have been exploring technologies such as React, Node.js, MySQL, and MongoDB, and am excited to deepen my knowledge. My journey in web development began with a curiosity about how things work, and I am now focused on developing the skills necessary to build impactful and high-quality digital solutions. I thrive in collaborative environments and enjoy solving problems. Outside of coding, I am always looking for opportunities to stay active, explore new technologies, and contribute to open-source projects.`;

export const EXPERIENCES = [
    {
        year: "2023 - Present",
        role: "Senior Full Stack Developer",
        company: "Google Inc.",
        description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
        technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    },
    {
        year: "2022 - 2023",
        role: "Frontend Developer",
        company: "Adobe",
        description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
        technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
    },
    {
        year: "2021 - 2022",
        role: "Full Stack Developer",
        company: "Facebook",
        description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
        technologies: ["Python", "Svelte", "Three.js", "Postgres"],
    },
    {
        year: "2020 - 2021",
        role: "Software Engineer",
        company: "Paypal",
        description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
        technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
    },
];

export const PROJECTS = [
    {
        title: "Acadamix",
        image: project1,
        description:
            "Academix is a digital student management platform designed for educators and students. It allows teachers to manage classrooms, create virtual classes, upload assignments, post notices, share results, generate timetables, and track attendance using facial recognition. Students can join classes, access materials, view notices, check results, and monitor attendance. Built with React, Tailwind, Redux, Node.js, Express, MongoDB, and Flask with Insight Face for facial recognition, Academix ensures efficient and seamless management.",
        technologies: ["HTML", "CSS", "React", "Node.js","Express.js","MongoDB"],
    },
    {
        title: "SuperMarket Management System",
        image: project2,
        description:
            "The Supermarket Management System is a C# application that streamlines inventory, billing, sales, and customer engagement. With a user-friendly interface and SQL database, it ensures efficiency, data accuracy, and secure access. Offering reporting and analytics, it supports decision-making and resource optimization. Scalable and adaptable, it can integrate features like barcode scanning and e-commerce, improving productivity and the shopping experience.",
        technologies: ["C#", ".Net", "SQL"],
    },
    {
        title: "Portfolio Website",
        image: project3,
        description:
            "A personal portfolio website built to showcase projects, skills, and contact information using modern web technologies. HTML structures the content, while CSS ensures a clean and responsive design. React powers dynamic interactions and seamless navigation, and TailwindCSS provides efficient, customizable styling. Motion is used for smooth animations and transitions, creating an engaging user experience. This portfolio effectively highlights key projects and skills while offering easy access to contact details.",
        technologies: ["HTML", "CSS", "React", "TailwindCSS"],
    },
];

export const CONTACT = {
    address: "713/7th flr, Shree Shraddha bldg, G.D Ambekar Marg, Mumbai-12",
    phoneNo: " +91 8591 1063 62 ",
    email: "shreysawant01@gmail.com",
};