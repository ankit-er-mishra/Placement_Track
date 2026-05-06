function Development() {
  const projects = [
    {
      name: "Portfolio Website",
      tech: ["HTML", "CSS", "JS"],
      status: "Completed",
      desc: "Personal portfolio with projects and resume",
    },
    {
      name: "NextStep Dashboard",
      tech: ["React", "CSS"],
      status: "In Progress",
      desc: "Placement readiness tracking app (this one!)",
    },
    {
      name: "Todo App with Auth",
      tech: ["React", "Node.js", "MongoDB"],
      status: "In Progress",
      desc: "Full-stack todo app with login/register",
    },
    {
      name: "Weather App",
      tech: ["React", "API"],
      status: "Completed",
      desc: "Weather app using OpenWeatherMap API",
    },
    {
      name: "Chat Application",
      tech: ["Socket.io", "Node.js"],
      status: "Planned",
      desc: "Real-time chat using WebSockets",
    },
  ];

  const technologies = [
    "HTML", "CSS", "JavaScript", "React", "Node.js",
    "Express", "MongoDB", "Git", "REST APIs", "Tailwind CSS",
  ];

  const statusColor = (s) => {
    if (s === "Completed") return "green";
    if (s === "In Progress") return "yellow";
    return "blue";
  };

  const completed = projects.filter((p) => p.status === "Completed").length;
  const inProgress = projects.filter((p) => p.status === "In Progress").length;

  return (
    <div>
      <div className="page-header">
        <h1>🧑‍💻 Development Tracker</h1>
        <p>Your projects and technologies learned</p>
      </div>

  
      <div className="cards-grid">
        <div className="stat-card green">
          <div className="card-label">Completed</div>
          <div className="card-value">{completed}</div>
          <div className="card-sub">Projects done</div>
        </div>
        <div className="stat-card yellow">
          <div className="card-label">In Progress</div>
          <div className="card-value">{inProgress}</div>
          <div className="card-sub">Currently working on</div>
        </div>
        <div className="stat-card blue">
          <div className="card-label">Total Projects</div>
          <div className="card-value">{projects.length}</div>
          <div className="card-sub">All projects</div>
        </div>
        <div className="stat-card purple">
          <div className="card-label">Technologies</div>
          <div className="card-value">{technologies.length}</div>
          <div className="card-sub">Skills learned</div>
        </div>
      </div>


      <div className="section-box">
        <h3>📁 Projects</h3>
        <table className="simple-table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Description</th>
              <th>Tech Stack</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 600 }}>{p.name}</td>
                <td style={{ color: "var(--text2)", fontSize: 12 }}>{p.desc}</td>
                <td>
                  <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                    {p.tech.map((t) => (
                      <span key={t} className="tag purple">{t}</span>
                    ))}
                  </div>
                </td>
                <td>
                  <span className={`tag ${statusColor(p.status)}`}>{p.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

  
      <div className="section-box">
        <h3>🛠️ Technologies Learned</h3>
        <div className="tech-grid">
          {technologies.map((t) => (
            <div className="tech-pill" key={t}>{t}</div>
          ))}
        </div>
      </div>

\
      <div className="section-box">
        <h3>⏱️ Hours Spent (This Week)</h3>
        {[
          { day: "Monday", hours: 2 },
          { day: "Tuesday", hours: 3.5 },
          { day: "Wednesday", hours: 1.5 },
          { day: "Thursday", hours: 4 },
          { day: "Friday", hours: 2.5 },
          { day: "Saturday", hours: 5 },
          { day: "Sunday", hours: 3 },
        ].map((d) => (
          <div className="score-bar-item" key={d.day} style={{ marginBottom: 8 }}>
            <span className="sbi-label">{d.day}</span>
            <div className="sbi-track">
              <div className="sbi-fill" style={{ width: `${(d.hours / 6) * 100}%`, background: "var(--blue)" }}></div>
            </div>
            <span className="sbi-val">{d.hours}h</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Development;