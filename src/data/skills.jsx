import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { TbBrain } from "react-icons/tb";
import {
  SiDjango,
  SiFastapi,
  SiFlask,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiOpencv,
  SiSpringboot,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";

export const skills = [
  { name: "HTML", category: "Frontend", icon: <FaHtml5 />, color: "#fb923c", description: "Semantic structure for the web." },
  { name: "CSS", category: "Frontend", icon: <FaCss3Alt />, color: "#60a5fa", description: "Responsive layouts and visual styling." },
  { name: "JavaScript", category: "Frontend", icon: <SiJavascript />, color: "#facc15", description: "Interactive, dynamic web experiences." },
  { name: "React", category: "Frontend", icon: <FaReact />, color: "#22d3ee", description: "Component-based user interfaces." },
  { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss />, color: "#22d3ee", description: "Utility-first interface styling." },
  { name: "Python", category: "Backend", icon: <FaPython />, color: "#60a5fa", description: "Application logic and machine learning." },
  { name: "Flask", category: "Backend", icon: <SiFlask />, color: "#e4e4e7", description: "Lightweight Python web applications." },
  { name: "Node.js", category: "Backend", icon: <FaNodeJs />, color: "#4ade80", description: "JavaScript runtime for server-side apps." },
  { name: "FastAPI", category: "Backend", icon: <SiFastapi />, color: "#22d3ee", description: "Python framework for building APIs." },
  { name: "Django", category: "Backend", icon: <SiDjango />, color: "#4ade80", description: "Python framework for web development." },
  { name: "Spring Boot", category: "Backend", icon: <SiSpringboot />, color: "#86efac", description: "Java framework for application services." },
  { name: "MongoDB", category: "Database", icon: <SiMongodb />, color: "#4ade80", description: "Document-oriented data storage." },
  { name: "MySQL", category: "Database", icon: <SiMysql />, color: "#60a5fa", description: "Relational data and SQL." },
  { name: "Machine Learning", category: "AI & ML", icon: <TbBrain />, color: "#c4b5fd", description: "Learning patterns from data." },
  { name: "OpenCV", category: "AI & ML", icon: <SiOpencv />, color: "#67e8f9", description: "Computer vision and image processing." },
  { name: "TensorFlow", category: "AI & ML", icon: <SiTensorflow />, color: "#fb923c", description: "Machine learning model development." },
  { name: "Computer Vision", category: "AI & ML", icon: <TbBrain />, color: "#a78bfa", description: "Image understanding and visual recognition." },
  { name: "Git", category: "Tools", icon: <FaGitAlt />, color: "#fb923c", description: "Version control and collaboration." },
  { name: "GitHub", category: "Tools", icon: <SiGithub />, color: "#e4e4e7", description: "Code hosting and collaborative workflows." },
];

export const categories = ["All", "Frontend", "Backend", "Database", "AI & ML", "Tools"];
