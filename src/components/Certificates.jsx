import { FaCertificate } from "react-icons/fa";

function Certificates() {
  const certificates = [
    {
      title: "Python Programming",
      issuer: "Cisco / Coursera / NPTEL",
    },
    {
      title: "React Development",
      issuer: "Udemy",
    },
    {
      title: "Machine Learning",
      issuer: "Coursera",
    },
    {
      title: "Web Development",
      issuer: "freeCodeCamp",
    },
  ];

  return (
    <section id="certificates" className="bg-[#111827] py-20 text-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-2xl p-8 text-center hover:scale-105 transition duration-300"
            >
              <FaCertificate
                className="text-yellow-400 mx-auto mb-5"
                size={45}
              />

              <h3 className="text-xl font-bold">
                {certificate.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {certificate.issuer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;