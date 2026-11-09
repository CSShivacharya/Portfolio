import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a href="#home" className="brand-mark" aria-label="Back to top">
          <span className="brand-icon">&lt;/&gt;</span>
          <span>Chandrashekhara</span>
        </a>
        <p className="footer-note">
          Building with curiosity and a little <FaHeart aria-label="love" />.
        </p>
        <div className="footer-links">
          <a href="https://github.com/CSShivacharya" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/chandra-v-m-019b60260/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="#home" aria-label="Back to top">
            <FiArrowUpRight />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Chandrashekhara Shivacharya V M</span>
        <span>Designed &amp; built with React</span>
      </div>
    </footer>
  );
}

export default Footer;
