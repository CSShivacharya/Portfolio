import { useEffect, useRef, useState } from "react";
import { FaTerminal } from "react-icons/fa";
import projects from "../data/projects";

const commandNames = [
  "help",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "github",
  "contact",
  "clear",
  "exit",
];

const commandOutput = {
  help: [
    "Available commands:",
    ...commandNames.map((command) => `  ${command}`),
    "",
    "Commands show verified portfolio details or navigate to a section.",
  ],
  about: [
    "Chandrashekhara Shivacharya V M",
    "Full Stack Developer · Python Developer · AI/ML Enthusiast",
    "Computer science engineer building web applications and AI-powered tools.",
  ],
  skills: [
    "Python · JavaScript · React · Node.js",
    "FastAPI · Flask · MySQL · MongoDB",
    "OpenCV · TensorFlow · Machine Learning · Computer Vision",
    "Git · GitHub",
  ],
  projects: projects.map(({ title }) => `  ${title}`),
  experience: [
    "Python Programming and Machine Learning",
    "Karunadu Technologies Pvt. Ltd.",
    "Built responsive web pages, integrated machine learning models, and improved interfaces.",
  ],
  education: [
    "B.E. Computer Science — Acharya Institute of Technology (2023–2026), CGPA 7.91",
    "Diploma, Computer Science — Government Polytechnic Hosadurga (2020–2023), CGPA 9.44",
  ],
  github: [
    "GitHub profile: github.com/CSShivacharya",
    ...projects
      .filter((project) => project.github)
      .map(({ title, github }) => `${title}: ${github}`),
  ],
  contact: [
    "Email: chandrashekharashivacharya18@gmail.com",
    "LinkedIn: linkedin.com/in/chandra-v-m-019b60260/",
  ],
};

function DeveloperTerminal() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const triggerRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    const show = () => setOpen(true);
    const onKeyDown = (event) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        show();
      } else if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-developer-terminal", show);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-developer-terminal", show);
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

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const runCommand = (event) => {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) return;
    setInput("");
    setHistoryIndex(-1);

    if (command === "clear") {
      setHistory([]);
      return;
    }
    if (command === "exit") {
      setOpen(false);
      return;
    }

    const output = commandOutput[command];
    if (output) {
      setHistory((entries) => [...entries, { command, output }]);
      if (["experience", "education", "contact"].includes(command)) {
        const targetId = command === "education" ? "education" : command;
        setOpen(false);
        window.setTimeout(() => {
          window.location.hash = targetId;
        }, 0);
      } else if (command === "projects") {
        setOpen(false);
        window.setTimeout(() => {
          window.location.hash = "projects";
        }, 0);
      }
      return;
    }

    setHistory((entries) => [
      ...entries,
      { command, output: [`Command not found: ${command}`, "Type 'help' to see available commands."] },
    ]);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "ArrowUp" && history.length > 0) {
      event.preventDefault();
      const nextIndex = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(nextIndex);
      setInput(history[history.length - 1 - nextIndex].command);
    } else if (event.key === "ArrowDown" && historyIndex >= 0) {
      event.preventDefault();
      const nextIndex = historyIndex - 1;
      setHistoryIndex(nextIndex);
      setInput(nextIndex < 0 ? "" : history[history.length - 1 - nextIndex].command);
    }
  };

  const handleDialogKeyDown = (event) => {
    if (event.key !== "Tab") return;
    const focusable = event.currentTarget.querySelectorAll(
      'button:not(:disabled), input:not(:disabled)',
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
        className="terminal-trigger"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Open developer terminal"
        aria-keyshortcuts="Control+Shift+K"
      >
        <FaTerminal aria-hidden="true" />
        <span>Terminal</span>
      </button>

      {open && (
        <div
          className="terminal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <section
            className="developer-terminal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="terminal-title"
            onKeyDown={handleDialogKeyDown}
          >
            <header className="terminal-header">
              <div>
                <span className="terminal-indicator" aria-hidden="true" />
                <h2 id="terminal-title">CHANDRA.EXE / TERMINAL</h2>
              </div>
              <button
                type="button"
                className="terminal-close"
                onClick={() => setOpen(false)}
                aria-label="Close developer terminal"
              >
                ×
              </button>
            </header>
            <div className="terminal-output" ref={outputRef} aria-live="polite">
              <p className="terminal-welcome">
                Portfolio command interface. Type <code>help</code> to begin.
              </p>
              {history.map((entry, index) => (
                <div className="terminal-result" key={`${entry.command}-${index}`}>
                  <p><span>&gt;</span> {entry.command}</p>
                  {entry.output.map((line, lineIndex) => (
                    <p className="terminal-result-line" key={`${line}-${lineIndex}`}>{line || "\u00a0"}</p>
                  ))}
                </div>
              ))}
            </div>
            <form className="terminal-input-row" onSubmit={runCommand}>
              <label htmlFor="terminal-command"><span aria-hidden="true">&gt;</span></label>
              <input
                id="terminal-command"
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleInputKeyDown}
                autoComplete="off"
                autoCapitalize="none"
                spellCheck="false"
                aria-label="Enter a portfolio command"
                placeholder="type a command..."
              />
              <kbd>ENTER</kbd>
            </form>
            <p className="terminal-hint">↑ / ↓ command history <span>·</span> Esc to close</p>
          </section>
        </div>
      )}
    </>
  );
}

export default DeveloperTerminal;
