import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CommandMenu from "./CommandMenu";
import DeveloperTerminal from "./DeveloperTerminal";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );

    links.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="site-nav-inner">
        <a href="#home" className="brand-mark" aria-label="Go to homepage">
          <span className="brand-icon">&lt;/&gt;</span>
          <span>CS SHIVACHARYA</span>
        </a>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={activeSection === link.href.slice(1) ? "active" : ""}
                aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a className="nav-contact" href="#contact">
          Let&apos;s talk
        </a>
        <DeveloperTerminal />
        <CommandMenu />

        <button
          type="button"
          className="mobile-nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-nav" id="mobile-navigation">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={activeSection === link.href.slice(1) ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Let&apos;s talk
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
