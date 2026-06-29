function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#0f172a] text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          Experience & Education
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Experience */}

          <div className="bg-[#1e293b] p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-blue-400 mb-5">
              Experience
            </h3>

            <div>
              <h4 className="text-xl font-semibold">
                Python Programming and Machine Learning
              </h4>

              <p className="text-gray-400">
                Karunadu technologies Pvt.Ltd
              </p>

              <p className="mt-4 text-gray-300">
                • Built responsive web pages using React, HTML, CSS, and Tailwind CSS.
              </p>

              <p className="text-gray-300">
                • Integrated Machine Learning models into web applications.
              </p>

              <p className="text-gray-300">
                • Improved UI and fixed bugs.
              </p>
            </div>
          </div>

          {/* Education */}

          <div className="bg-[#1e293b] p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-blue-400 mb-5">
              Education
            </h3>

            <h4 className="text-xl font-semibold">
              BE Computer Science
            </h4>

            <p className="text-gray-400">
              Acharya Institute of Technology
            </p>

            <p className="mt-4 text-gray-300">
              CGPA: 7.89
            </p>

            <p className="text-gray-300">
              2023 - 2026
            </p>
            <h4 className="text-xl font-semibold">
              Diploma Computer Science
            </h4>
            <p className="text-gray-400">
              Government Polytechnic Hosadurga 
            </p>
            <p className="mt-4 text-gray-300">
              CGPA: 9.44
            </p>

            <p className="text-gray-300">
              2020 - 2023
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;