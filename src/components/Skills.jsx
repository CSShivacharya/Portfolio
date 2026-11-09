import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { categories, skills } from "../data/skills.jsx";

function Skills() {
  const [category, setCategory] = useState("All");
  const filteredSkills = useMemo(
    () => skills.filter((skill) => category === "All" || skill.category === category),
    [category],
  );

  return (
    <section id="skills" className="skills-section py-24">
      <div className="section-container">
        <div className="section-eyebrow">MY TOOLKIT</div>
        <h2 className="section-title">Tools of the trade.</h2>
        <p className="section-lede">
          The technologies I use to turn a blank canvas into something useful.
        </p>

        <div className="skill-filters" role="group" aria-label="Filter skills by category">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={category === item ? "skill-filter active" : "skill-filter"}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>

        <motion.div layout className="skills-grid">
          {filteredSkills.map((skill) => (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              className="skill-card"
              key={skill.name}
              style={{ "--skill-color": skill.color }}
            >
              <div className="skill-card-top">
                <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
                <span className="skill-category">{skill.category}</span>
              </div>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
