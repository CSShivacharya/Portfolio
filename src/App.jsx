import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Services from "./components/Services";
import ScrollToTop from "./components/ScrollToTop";
import Certificates from "./components/Certificates";
import ScrollProgress from "./components/ScrollProgress";
import Cursor from "./components/Cursor";
const GitHubStats = lazy(() => import("./components/GitHubStats"));
const ScrollAnimations = lazy(() => import("./components/ScrollAnimations"));

function App() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Suspense fallback={null}>
        <ScrollAnimations />
      </Suspense>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Services />
        <Projects />
        <Suspense
          fallback={<div className="github-loading" aria-label="Loading GitHub activity" />}
        >
          <GitHubStats />
        </Suspense>
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;