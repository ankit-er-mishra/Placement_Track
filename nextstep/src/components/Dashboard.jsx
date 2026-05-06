function Dashboard({ user }) {
  const totalTasks = 12;
  const completedTasks = 7;
  const pendingTasks = totalTasks - completedTasks;
  const percent = Math.round((completedTasks / totalTasks) * 100);

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div>
    
      <div className="welcome-banner">
        <div>
          <h2>Welcome back, {user.name}! 👋</h2>
          <p>{today}</p>
          <p style={{ marginTop: 8, fontWeight: 600 }}>
            You're {percent}% ready for placements. Keep going!
          </p>
        </div>
        <div className="banner-emoji">🎯</div>
      </div>

  
      <div className="cards-grid">
        <div className="stat-card blue">
          <div className="card-label">Total Tasks</div>
          <div className="card-value">{totalTasks}</div>
          <div className="card-sub">Across all sections</div>
        </div>
        <div className="stat-card green">
          <div className="card-label">Completed</div>
          <div className="card-value">{completedTasks}</div>
          <div className="card-sub">Great progress!</div>
        </div>
        <div className="stat-card yellow">
          <div className="card-label">Pending</div>
          <div className="card-value">{pendingTasks}</div>
          <div className="card-sub">Stay focused</div>
        </div>
        <div className="stat-card purple">
          <div className="card-label">Readiness</div>
          <div className="card-value">{percent}%</div>
          <div className="card-sub">Overall score</div>
        </div>
      </div>

     
      <div className="section-box">
        <h3>📈 Overall Progress</h3>
        <div className="progress-bar-wrap">
          <div className="progress-bar-label">
            <span>DSA Preparation</span><span>65%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill green" style={{ width: "65%" }}></div>
          </div>
        </div>
        <div className="progress-bar-wrap">
          <div className="progress-bar-label">
            <span>Development Projects</span><span>50%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill blue" style={{ width: "50%" }}></div>
          </div>
        </div>
        <div className="progress-bar-wrap">
          <div className="progress-bar-label">
            <span>Mock Tests</span><span>80%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill yellow" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="progress-bar-wrap">
          <div className="progress-bar-label">
            <span>Daily Goals</span><span>58%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill purple" style={{ width: "58%" }}></div>
          </div>
        </div>
      </div>

      
      <div className="section-box">
        <h3>💡 Quick Tips for Today</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { icon: "🧠", tip: "Revise sliding window problems — common in interviews" },
            { icon: "🔨", tip: "Push your latest project to GitHub today" },
            { icon: "📋", tip: "Attempt one aptitude mock test" },
            { icon: "✅", tip: "Check off at least 3 goals before end of day" },
          ].map((t, i) => (
            <div key={i} style={{
              display: "flex", gap: 12, alignItems: "flex-start",
              padding: "10px 14px", background: "var(--surface2)",
              borderRadius: 8, fontSize: 13,
            }}>
              <span>{t.icon}</span>
              <span>{t.tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;