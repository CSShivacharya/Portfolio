import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function ProjectCard({
  visual,
  title,
  type,
  description,
  technologies,
  github,
  demo,
  index,
  onDetails,
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.035, 0.2) }}
      whileHover={{ y: -7, rotateX: 1.5, rotateY: -1 }}
      className="project-card"
    >
      <div className={`project-card-visual ${visual ? `project-visual-${visual}` : ""}`}>
        <button
          type="button"
          className={`project-portal ${visual ?? ""}`}
          onClick={onDetails}
          aria-label={`Enter project details for ${title}`}
        >
          <span className="portal-rings" aria-hidden="true">
            <i /><i /><i />
          </span>
          <span className="portal-core" aria-hidden="true">
            {visual === "chat" ? "</>" : visual === "crm" ? "AI+" : "◈"}
          </span>
          <span className="portal-caption">ENTER PROJECT <FiArrowUpRight aria-hidden="true" /></span>
        </button>
        <span className="project-category">{type}</span>
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>

        {technologies.length > 0 && (
          <div className="project-tags" aria-label="Technologies used">
            {technologies.map((technology) => (
              <span key={technology} className="project-tag">{technology}</span>
            ))}
          </div>
        )}

        <div className="project-card-footer">
          <button type="button" className="project-details-button" onClick={onDetails}>
            View details <FiArrowUpRight aria-hidden="true" />
          </button>
          <div className="project-quick-links">
            {github && (
              <a href={github} target="_blank" rel="noreferrer" aria-label={`${title} GitHub repository`}>
                <FaGithub />
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer" aria-label={`${title} live demo`}>
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
