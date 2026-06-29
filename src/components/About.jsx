import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
function About() {
  return (
    <section
      id="about"
      className="bg-[#111827] text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          About Me
        </h2>

        <motion.div
  className="grid md:grid-cols-2 gap-16 items-center"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

        

          {/* Right Side */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              Full Stack Developer
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              I am a Computer Science Engineering student passionate
              about Full Stack Web Development and Artificial
              Intelligence.

              I enjoy developing responsive web applications using
              React, Node.js, Python, Flask, and MySQL.

              I love learning new technologies and solving
              real-world problems.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-[#1e293b] p-5 rounded-xl">
                <h4 className="text-blue-400 font-bold">Experience</h4>
                <p>Frontend Developer Intern</p>
              </div>

              <div className="bg-[#1e293b] p-5 rounded-xl">
                <h4 className="text-blue-400 font-bold">Education</h4>
                <p>BE - Computer Science</p>
              </div>

              <div className="bg-[#1e293b] p-5 rounded-xl">
                <h4 className="text-blue-400 font-bold">Projects</h4>
                <p>15+ Completed</p>
              </div>

              <div className="bg-[#1e293b] p-5 rounded-xl">
                <h4 className="text-blue-400 font-bold">Skills</h4>
                <p>React • Python • Node.js</p>
              </div>

            </div>

          </div>

       </motion.div>

      </div>
      
    </section>
  );
}

export default About;