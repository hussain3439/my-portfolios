import project1 from "../assets/projects/project1.png";
// import project2 from "../assets/projects/project2.png";
// import project3 from "../assets/projects/project3.svg";

const projects = [
  {
    id: 1,
    title: "Developer Portfolio & Showcase",
    image: project1,
    category: "Frontend Web Application",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "React Router",
      "Vite"
    ],
    description:
      "A modern, high-performance personal portfolio built for showcasing frontend engineering skills, interactive projects, and a responsive resume viewer. Features smooth section navigation, responsive mobile menu, dynamic routing, and ATS-friendly printable resume.",
    live: "https://example.com/portfolio-demo",
    github: "https://github.com/example/portfolio-frontend",
    challenges: [
      "Building a smooth active-section scroll spy with route-aware navigation",
      "Crafting an ATS-compatible, print-optimized resume stylesheet in React",
      "Ensuring fluid responsiveness across ultra-wide monitors down to small mobile viewports"
    ],
    future: [
      "Dark / Light theme mode toggle with localStorage persistence",
      "Interactive contact form integration via EmailJS / Web3Forms",
      "Markdown-powered tech blog section with syntax highlighting"
    ],
  },
  
];

export default projects;
