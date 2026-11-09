import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FiCommand, FiHome, FiSearch, FiUser } from "react-icons/fi";

const commands = [
  { label: "Go to Home", detail: "Back to the beginning", href: "#home", icon: <FiHome /> },
  { label: "Meet me", detail: "About Chandrashekhara", href: "#about", icon: <FiUser /> },
  { label: "Explore my skills", detail: "Technologies and tools", href: "#skills", icon: <FiCommand /> },
  { label: "View selected work", detail: "Projects and experiments", href: "#projects", icon: <FaArrowRight /> },
  { label: "My experience", detail: "Work and education", href: "#experience", icon: <FiUser /> },
  { label: "Get in touch", detail: "Contact form and email", href: "#contact", icon: <FaEnvelope /> },
  { label: "Download resume", detail: "PDF · Chandrashekhara Shivacharya V M", href: "/chandracv.pdf", download: true, icon: <FaDownload /> },
  { label: "GitHub profile", detail: "Repositories and activity", href: "https://github.com/CSShivacharya", external: true, icon: <FaGithub /> },
  { label: "LinkedIn profile", detail: "Connect professionally", href: "https://www.linkedin.com/in/chandra-v-m-019b60260/", external: true, icon: <FaLinkedin /> },
];

function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const triggerRef = useRef(null);
  const resultsRef = useRef(null);
  const results = useMemo(() => {
    const search = query.trim().toLowerCase();
    return commands.filter((command) =>
      `${command.label} ${command.detail}`.toLowerCase().includes(search),
    );
  }, [query]);

  useEffect(() => {
    const show = () => {
      setQuery("");
      setActiveIndex(0);
      setOpen(true);
    };
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        show();
      } else if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-menu", show);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-menu", show);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    const triggerElement = triggerRef.current;
    document.body.style.overflow = "hidden";
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
      window.cancelAnimationFrame(frame);
      triggerElement?.focus();
    };
  }, [open]);

  const handleInputKeyDown = (event) => {
    if (event.key === "ArrowDown" && results.length > 0) {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % results.length);
    } else if (event.key === "ArrowUp" && results.length > 0) {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + results.length) % results.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      const options = resultsRef.current?.querySelectorAll('[role="option"]');
      options?.[activeIndex]?.click();
    }
  };

  const handleDialogKeyDown = (event) => {
    if (event.key !== "Tab") return;
    const focusable = Array.from(
      resultsRef.current?.closest(".command-dialog")
        ?.querySelectorAll("input, a[href], button:not(:disabled)") ?? [],
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="command-trigger"
        onClick={() => window.dispatchEvent(new Event("open-command-menu"))}
        aria-label="Open quick navigation"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="command-dialog"
        aria-keyshortcuts="Control+K Meta+K"
      >
        <FiSearch aria-hidden="true" />
        <span>Quick jump</span>
        <kbd>Ctrl</kbd><kbd>K</kbd>
      </button>

      {open && (
          <div
            className="command-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setOpen(false);
            }}
          >
            <div
              className="command-dialog"
              id="command-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="command-title"
              onKeyDown={handleDialogKeyDown}
            >
              <h2 className="sr-only" id="command-title">Quick navigation</h2>
              <div className="command-search">
                <FiSearch aria-hidden="true" />
                <input
                  ref={inputRef}
                  type="search"
                  placeholder="Where would you like to go?"
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setActiveIndex(0);
                  }}
                  onKeyDown={handleInputKeyDown}
                  aria-label="Search navigation commands"
                  role="combobox"
                  aria-expanded="true"
                  aria-autocomplete="list"
                  aria-controls="command-results"
                  aria-activedescendant={results[activeIndex] ? `command-${activeIndex}` : undefined}
                />
                <kbd>ESC</kbd>
              </div>
              <p className="command-section-label">NAVIGATE / CONNECT</p>
              <div className="command-results" id="command-results" role="listbox" ref={resultsRef}>
                {results.map((command, index) => (
                  <a
                    key={command.label}
                    id={`command-${index}`}
                    role="option"
                    aria-selected={index === activeIndex}
                    className={index === activeIndex ? "command-option active" : "command-option"}
                    href={command.href}
                    download={command.download || undefined}
                    target={command.external ? "_blank" : undefined}
                    rel={command.external ? "noreferrer" : undefined}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setOpen(false)}
                  >
                    <span className="command-option-icon" aria-hidden="true">{command.icon}</span>
                    <span className="command-option-copy">
                      <strong>{command.label}</strong>
                      <small>{command.detail}</small>
                    </span>
                    <FaArrowRight className="command-option-arrow" aria-hidden="true" />
                  </a>
                ))}
                {results.length === 0 && (
                  <p className="command-empty">No matches. Try “projects” or “contact”.</p>
                )}
              </div>
              <div className="command-footer">
                <span><kbd>↑</kbd><kbd>↓</kbd> to navigate</span>
                <span><kbd>↵</kbd> to open</span>
                <span><kbd>ESC</kbd> to close</span>
              </div>
            </div>
          </div>
      )}
    </>
  );
}

export default CommandMenu;
