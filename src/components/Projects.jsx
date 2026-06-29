import ProjectCard from "./ProjectCard";

import task from "../assets/projects/tasktracker.png";
import portfolio from "../assets/projects/portfolio.png";
import nirmaan from "../assets/projects/nirmaan.png";

function Projects() {

  const projects = [

    {
      image: task,
      title: "AI-Powered Offline-First Restaurant Dashboard ",
      description:
        "At Ecomeal, we are building AI-powered systems for restaurants to reduce food waste, improve inventory efficiency, and increase profitability.",
      technologies: [
        "Flask",
        "Node.js",
        "MongoDB",
      ],
      github: "https://github.com/YOUR_USERNAME/tasktracker",
      demo: "https://ecomeal-dashboard.vercel.app/login",
    },

    {
      image: nirmaan,
      title: "Nirmaan AI",
      description:
        "AI-powered delay prediction for public infrastructure projects.",
      technologies: [
        "React",
        "Flask",
        "Python",
        "Machine Learning",
      ],
      github: "https://github.com/YOUR_USERNAME/nirmaan",
      demo: "#",
    },

    {
      image: portfolio,
      title: "Portfolio Website",
      description:
        "Modern responsive developer portfolio.",
      technologies: [
        "React",
        "Tailwind",
        "Framer Motion",
      ],
      github: "https://github.com/YOUR_USERNAME/portfolio",
      demo: "#",
    },

  ];

  return (

    <section
      id="projects"
      className="bg-[#111827] py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl text-white font-bold text-center mb-16">
          Featured Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}

        </div>

      </div>

    </section>

  );
}

export default Projects;