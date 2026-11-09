import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaGraduationCap } from "react-icons/fa";

function Experience() {
  const responsibilities = [
    "Built responsive web pages using React, HTML, CSS, and Tailwind CSS.",
    "Integrated machine learning models into web applications.",
    "Improved user interfaces and fixed bugs.",
  ];

  return (
    <section id="experience" className="experience-section py-24">
      <div className="section-container">
        <div className="section-eyebrow">THE JOURNEY SO FAR</div>
        <h2 className="section-title">Learning by building.</h2>
        <p className="section-lede">
          Hands-on experience and the education behind my work.
        </p>

        <div className="journey-grid">
          <motion.article
            className="journey-card"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="journey-card-head">
              <span className="journey-icon"><FaBriefcase /></span>
              <span className="journey-label">EXPERIENCE</span>
            </div>
            <h3>Python Programming and Machine Learning</h3>
            <p className="journey-company">Karunadu Technologies Pvt. Ltd.</p>
            <ul className="journey-list">
              {responsibilities.map((responsibility) => (
                <li key={responsibility}>
                  <FaCode aria-hidden="true" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
            <div className="journey-tags">
              {["React", "Python", "Machine Learning", "Tailwind CSS"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.article>

          <div className="education-timeline" id="education">
            <div className="journey-card-head">
              <span className="journey-icon"><FaGraduationCap /></span>
              <span className="journey-label">EDUCATION</span>
            </div>
            <motion.article
              className="education-card"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="education-period">2023 — 2026</span>
              <h3>B.E. Computer Science</h3>
              <p>Acharya Institute of Technology</p>
              <span className="education-score">CGPA 7.91</span>
            </motion.article>
            <motion.article
              className="education-card"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="education-period">2020 — 2023</span>
              <h3>Diploma, Computer Science</h3>
              <p>Government Polytechnic Hosadurga</p>
              <span className="education-score">CGPA 9.44</span>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
