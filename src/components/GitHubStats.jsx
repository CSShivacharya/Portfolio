import GitHubCalendar from "react-github-calendar";

function GitHubStats() {
  return (
    <section className="bg-[#111827] py-20 text-white">

      <h2 className="text-5xl text-center mb-12">
        GitHub Activity
      </h2>

      <div className="flex justify-center">
        <GitHubCalendar username="CSShivacharya" />
      </div>

    </section>
  );
}

export default GitHubStats;