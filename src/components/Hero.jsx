import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0f172a] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg mb-2">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Chandrashekhara
            <br />
            <span className="text-blue-500">
              Shivacharya V M
            </span>
          </h1>

          <div className="mt-6 text-2xl text-gray-300 font-semibold">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "Python Developer",
                2000,
                "AI Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-gray-400 leading-8 max-w-lg">
            Passionate Computer Science student building responsive web
            applications, AI-powered solutions, and modern user
            experiences using React, Node.js, Python, Flask, and Machine
            Learning.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              Hire Me
            </a>

            <a
              href="/chandracv.pdf"
              download
              className="border border-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl flex items-center gap-2 transition"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 text-2xl">

            <a
               href="https://github.com/CSShivacharya"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/chandra-v-m-019b60260/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
               href="https://mail.google.com/:chandrashekharashivacharya18@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <img
              src={profile}
              alt="Profile"
              className="w-72 h-72 md:w-[420px] md:h-[420px] object-cover rounded-full border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.6)]"
            />

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-600 px-5 py-2 rounded-full text-white font-semibold shadow-lg">
              Open to Work 🚀
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;

