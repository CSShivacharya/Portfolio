import { FaCode, FaLaptopCode, FaDatabase, FaRobot } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaCode size={40} className="text-blue-500" />,
      title: "Frontend Development",
      desc: "Responsive websites using React, HTML, CSS, Tailwind CSS, and JavaScript.",
    },
    {
      icon: <FaLaptopCode size={40} className="text-green-500" />,
      title: "Full Stack Development",
      desc: "Developing complete web applications using MERN Stack and Flask.",
    },
    {
      icon: <FaDatabase size={40} className="text-yellow-500" />,
      title: "Database Design",
      desc: "Working with MySQL and MongoDB to build secure databases.",
    },
    {
      icon: <FaRobot size={40} className="text-purple-500" />,
      title: "AI & Machine Learning",
      desc: "Building AI-powered applications using Python, OpenCV, and ML.",
    },
  ];

  return (
    <section id="services" className="bg-[#0f172a] py-20 text-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
          My Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-2xl p-8 hover:scale-105 transition duration-300 shadow-lg"
            >
              <div className="mb-5">{service.icon}</div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;