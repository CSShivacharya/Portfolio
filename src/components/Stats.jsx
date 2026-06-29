function Stats() {
  const stats = [
    { number: "15+", label: "Projects" },
    { number: "10+", label: "Technologies" },
    { number: "1", label: "Internship" },
    { number: "7.79", label: "CGPA" },
  ];

  return (
    <section className="bg-[#111827] py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

        {stats.map((item, index) => (
          <div
            key={index}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-blue-500">
              {item.number}
            </h1>

            <p className="text-gray-400 mt-3">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;