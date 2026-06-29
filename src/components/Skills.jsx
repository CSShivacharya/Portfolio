import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { TbBrain } from "react-icons/tb";
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiFlask,
  SiTailwindcss,
  SiDjango,
  SiSpringboot,

} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={45} className="text-cyan-400" />, level: "95%" },
  { name: "JavaScript", icon: <SiJavascript size={45} className="text-yellow-400" />, level: "90%" },
  { name: "Python", icon: <FaPython size={45} className="text-blue-400" />, level: "92%" },
  { name: "Node.js", icon: <FaNodeJs size={45} className="text-green-500" />, level: "85%" },
  { name: "Flask", icon: <SiFlask size={45} />, level: "88%" },
  { name: "MongoDB", icon: <SiMongodb size={45} className="text-green-600" />, level: "80%" },
  { name: "MySQL", icon: <SiMysql size={45} className="text-blue-500" />, level: "85%" },
  { name: "Git", icon: <FaGitAlt size={45} className="text-orange-500" />, level: "90%" },
  { name: "HTML", icon: <FaHtml5 size={45} className="text-orange-600" />, level: "95%" },
  { name: "CSS", icon: <FaCss3Alt size={45} className="text-blue-400" />, level: "92%" },
  { name: "Tailwind", icon: <SiTailwindcss size={45} className="text-cyan-400" />, level: "90%" },
  { name: "Spring Boot", icon: <SiSpringboot size={45} className="text-green-400" />, level: "82%" },

  { name: "Machine Learning", icon: <TbBrain size={45} className="text-pink-500" />, level: "85%" },

  { name: "Django", icon: <SiDjango size={45} className="text-cyan-400" />, level: "90%" },
];

function Skills() {
  return (
    <section id="skills" className="bg-[#0f172a] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-2xl p-6 hover:-translate-y-2 transition duration-300 shadow-lg"
            >
              <div className="flex items-center gap-4">
                {skill.icon}

                <div className="w-full">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">
                      {skill.name}
                    </span>

                    <span className="text-gray-400">
                      {skill.level}
                    </span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: skill.level }}
                    ></div>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;