import { Component, lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Scene3D = lazy(() => import("./Scene3D"));

class SceneErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="scene-fallback" aria-hidden="true" />;
    }

    return this.props.children;
  }

  componentDidCatch(error) {
    console.error("WebGL hero scene failed; showing the CSS fallback.", error);
  }
}

function Hero() {
  const [sceneReady, setSceneReady] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      setLocalTime(
        new Intl.DateTimeFormat(undefined, {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };
    updateTime();
    const clockInterval = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(clockInterval);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const roles = 4;
    const roleInterval = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles);
    }, 2800);
    return () => window.clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    const connection = navigator.connection;
    const lowPowerDevice = navigator.deviceMemory <= 2 || connection?.saveData;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      lowPowerDevice
    ) {
      return undefined;
    }

    const showScene = () => setSceneReady(true);
    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(showScene, { timeout: 1200 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timer = window.setTimeout(showScene, 250);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-scene" aria-hidden="true">
        {sceneReady ? (
          <SceneErrorBoundary>
            <Suspense fallback={<div className="scene-fallback" />}>
              <Scene3D />
            </Suspense>
          </SceneErrorBoundary>
        ) : (
          <div className="scene-fallback" />
        )}
      </div>
      <div className="hero-system-readout" aria-label="Portfolio system information">
        <span className="system-readout-mark">CS SHIVACHARYA</span>
        <span>LOCAL TIME <strong>{localTime || "--:--:--"}</strong></span>
      </div>
      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="hero-kicker">WELCOME TO MY DIGITAL UNIVERSE</p>
          <p className="hero-name">CHANDRA</p>
          <h1 className="hero-title">
            <span className="hero-title-main">FULL STACK</span>
            <span>DEVELOPER</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">SPECIALIZATION //</span>
            <span className="role-current" key={roleIndex}>
              {["Python Developer", "Full Stack Developer", "AI/ML Enthusiast", "Creative Developer"][roleIndex]}
            </span>
          </div>

          <p className="hero-description">
            Hey, I&apos;m <strong>Chandrashekhara Shivacharya V M</strong> — a
            computer science student who turns curious ideas into useful
            products, building intelligent applications and immersive digital
            experiences along the way.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-button hero-button-primary">
              View my projects <FaArrowRight aria-hidden="true" />
            </a>
            <a href="#skills" className="hero-button">Explore my world</a>
            <a href="/chandracv.pdf" download className="hero-button">
              <FaDownload aria-hidden="true" /> Get my resume
            </a>
          </div>

          <div className="hero-bottom-row">
            <div className="hero-socials" aria-label="Social links">
              <a
                href="https://github.com/CSShivacharya"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
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
              <a
                href="mailto:chandrashekharashivacharya18@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
            <a href="#about" className="hero-scroll">
              Scroll to explore <FaArrowDown aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 18, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.75, delay: 0.12 }}
        >
          <div className="editor-window">
            <div className="editor-topbar">
              <div className="editor-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="editor-filename">about-me.jsx</span>
              <span className="editor-language">JS</span>
            </div>
            <div className="editor-code" aria-label="Developer profile code">
              {[
                <>
                  <span className="code-purple">const</span> developer = {"{"}
                </>,
                <>
                  {"  "}name: <span className="code-green">&quot;Chandrashekhara&quot;</span>,
                </>,
                <>
                  {"  "}role: <span className="code-green">&quot;Full Stack Developer&quot;</span>,
                </>,
                <>
                  {"  "}building: [<span className="code-green">&quot;web&quot;</span>, <span className="code-green">&quot;AI&quot;</span>, <span className="code-green">&quot;ideas&quot;</span>],
                </>,
                <>
                  {"  "}interests: <span className="code-green">&quot;AI + the web&quot;</span>,
                </>,
                <>
                  {"  "}focus: <span className="code-green">&quot;useful experiences&quot;</span>
                </>,
                <>{"}"};</>,
              ].map((line, index) => (
                <div className="editor-line" key={index}>
                  <span className="line-number">{String(index + 1).padStart(2, "0")}</span>
                  <code>{line}</code>
                </div>
              ))}
              <div className="editor-cursor-line">
                <span className="line-number">08</span>
                <span className="editor-cursor" aria-hidden="true" />
              </div>
            </div>
            <div className="editor-status">
              <span><i /> CHANDRA.EXE / DEVELOPER PORTFOLIO</span>
              <span>UTF-8&nbsp; · &nbsp;JSX</span>
            </div>
          </div>
          <div className="floating-chip floating-chip-one">
            <span>⚡</span> ships ideas
          </div>
          <div className="floating-chip floating-chip-two">
            <span>⌘</span> React · Python · AI
          </div>
          <a className="hero-connect-chip" href="#contact">
            Let&apos;s connect <FiArrowUpRight aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
