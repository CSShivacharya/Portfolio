import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const filters = ["All", "Web Apps", "AI & Data"];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const visibleProjects = useMemo(
    () => projects.filter((project) => filter === "All" || project.category === filter),
    [filter],
  );

  useEffect(() => {
    if (!selectedProject) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selectedProject]);

  return (
    <section id="projects" className="projects-section py-24">
      <div className="section-container">
        <div className="section-eyebrow">SELECTED BUILDS</div>
        <div className="projects-heading-row">
          <div>
            <h2 className="section-title">Ideas, meet execution.</h2>
            <p className="section-lede">
              A collection of work across web development, AI, and computer vision.
            </p>
          </div>
          <a
            href="https://github.com/CSShivacharya?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            More on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="project-filters" role="group" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              className={filter === item ? "project-filter active" : "project-filter"}
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
            >
              {item}
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
                onDetails={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="project-modal"
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
            >
              <button
                type="button"
                className="modal-close"
                autoFocus
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                ×
              </button>
              <span className="section-eyebrow">{selectedProject.type}</span>
              <h2 id="project-modal-title">{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              {selectedProject.technologies.length > 0 && (
                <div className="project-tags">
                  {selectedProject.technologies.map((technology) => (
                    <span className="project-tag" key={technology}>{technology}</span>
                  ))}
                </div>
              )}
              <div className="project-card-links">
                {selectedProject.github && (
                  <a
                    className="project-card-link"
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub repository ↗
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    className="project-card-link"
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open live demo ↗
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
