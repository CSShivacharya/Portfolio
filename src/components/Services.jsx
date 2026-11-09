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
      desc: "Building complete web applications with React, Node.js, Python, and Flask.",
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
    <section id="services" className="services-section py-24 text-white">
      <div className="section-container">
        <div className="section-eyebrow">HOW I LIKE TO BUILD</div>
        <h2 className="section-title">
          From interface to intelligence.
        </h2>
        <p className="section-lede mb-10">
          Areas I enjoy working across, grounded in the tools and projects I&apos;ve explored.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>

              <h3>
                {service.title}
              </h3>

              <p>
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