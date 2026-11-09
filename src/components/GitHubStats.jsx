import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const repositories = [
  {
    name: "ecomeal-dashboard",
    language: "TypeScript",
    href: "https://github.com/CSShivacharya/ecomeal-dashboard",
  },
  {
    name: "realtime-chat-app",
    language: "JavaScript",
    href: "https://github.com/CSShivacharya/realtime-chat-app",
  },
  {
    name: "Portfolio",
    language: "JavaScript",
    href: "https://github.com/CSShivacharya/Portfolio",
  },
];

function GitHubStats() {
  return (
    <section className="github-section py-20">
      <div className="section-container">
        <div className="github-panel">
          <div className="github-heading">
            <div>
              <div className="section-eyebrow">OPEN SOURCE &amp; ACTIVITY</div>
              <h2 className="section-title">A little green goes a long way.</h2>
            </div>
            <a
              href="https://github.com/CSShivacharya"
              target="_blank"
              rel="noreferrer"
              className="github-profile-link"
            >
              <FaGithub aria-hidden="true" />
              View GitHub
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="github-calendar-wrap">
            <GitHubCalendar
              username="CSShivacharya"
              colorScheme="dark"
              theme={{
                dark: ["#18181f", "#34366f", "#514da6", "#7169d4", "#a49bff"],
              }}
              blockSize={11}
              blockMargin={4}
              fontSize={12}
              hideColorLegend
            />
          </div>
          <p className="github-note">
            Contribution activity is loaded from GitHub. Repository details and
            counts are shown on the profile.
          </p>
          <div className="github-repositories">
            {repositories.map((repository) => (
              <a
                className="github-repository"
                href={repository.href}
                target="_blank"
                rel="noreferrer"
                key={repository.name}
              >
                <span className="github-repository-name">
                  <FaGithub aria-hidden="true" />
                  {repository.name}
                  <FiArrowUpRight aria-hidden="true" />
                </span>
                <span className="github-language">
                  <i className={repository.language === "TypeScript" ? "typescript" : "javascript"} />
                  {repository.language}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GitHubStats;
