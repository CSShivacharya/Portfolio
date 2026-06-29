import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects"; // <-- This line is required
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Services from "./components/Services";
import ScrollToTop from "./components/ScrollToTop";
import Certificates from "./components/Certificates";
import ScrollProgress from "./components/ScrollProgress";
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
     <Cursor />
    <ScrollProgress />
  <Navbar />
  <Hero />
  <About />
  <Stats />
  <Skills />
  <Services />
  <Projects />
  <Certificates />
  <Experience />
  <Contact />
  <ScrollToTop />
  <Footer />
  <div className="fixed inset-0 -z-10 overflow-hidden">
  <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 opacity-10 blur-[120px] rounded-full"></div>

  <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-500 opacity-10 blur-[150px] rounded-full"></div>
</div>
</>
  );
}

export default App;