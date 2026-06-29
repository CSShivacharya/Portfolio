import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
  image,
  title,
  description,
  technologies,
  github,
  demo,
}) {
  return (
    <div className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-xl hover:-translate-y-3 transition-all duration-300 hover:shadow-blue-500/40">

      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>

        <p className="text-gray-400 mt-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">

          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-600 px-3 py-1 rounded-full text-sm text-white"
            >
              {tech}
            </span>
          ))}

        </div>

        <div className="flex gap-4 mt-8">

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <FaExternalLinkAlt />
            Live
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;