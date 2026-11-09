import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="about-section py-24">
      <div className="section-container">
        <div className="section-eyebrow">A LITTLE CONTEXT</div>
        <h2 className="section-title">Behind the Code.</h2>

        <motion.div
          className="about-layout"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="about-photo-wrap">
            <div className="about-photo-orbit" aria-hidden="true" />
            <img
              src={profile}
              alt="Chandrashekhara Shivacharya V M"
              className="about-photo"
              loading="lazy"
            />
            <span className="about-photo-caption">CURIOSITY → CODE → IMPACT</span>
          </div>

          <div className="about-copy">
            <p className="about-lead">
              Hey, I&apos;m <span>Chandrashekhara</span> — a computer science
              engineering student who loves making technology feel useful.
            </p>
            <p className="about-description">
              My journey so far has taken me from a Computer Science diploma to
              a B.E. in Computer Science, and into hands-on work with Python,
              machine learning, and frontend development. I enjoy moving
              between the interface and the logic behind it: shaping a clean
              experience, connecting the pieces, and learning something new
              with every build.
            </p>
            <div className="about-facts">
              <div><span>01</span><strong>Full-stack web</strong></div>
              <div><span>02</span><strong>AI &amp; machine learning</strong></div>
              <div><span>03</span><strong>Real-world problem solving</strong></div>
            </div>
            <a href="#experience" className="text-link">
              Explore my journey <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
