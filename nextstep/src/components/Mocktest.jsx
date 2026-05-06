function MockTest() {
  const tests = [
    { name: "Aptitude Test 1", date: "01 May 2025", score: 78, total: 100, type: "Aptitude" },
    { name: "Coding Round – Arrays", date: "03 May 2025", score: 85, total: 100, type: "Coding" },
    { name: "Verbal Ability Test", date: "05 May 2025", score: 62, total: 100, type: "Verbal" },
    { name: "Aptitude Test 2", date: "07 May 2025", score: 91, total: 100, type: "Aptitude" },
    { name: "Coding Round – DP", date: "09 May 2025", score: 55, total: 100, type: "Coding" },
    { name: "Technical MCQ Test", date: "11 May 2025", score: 73, total: 100, type: "Technical" },
  ];

  const totalTests = tests.length;
  const avgScore = Math.round(tests.reduce((a, t) => a + t.score, 0) / totalTests);
  const bestScore = Math.max(...tests.map((t) => t.score));
  const latestScore = tests[tests.length - 1].score;

  const getScoreColor = (score) => {
    if (score >= 80) return "green";
    if (score >= 60) return "yellow";
    return "red";
  };

  const typeColor = (type) => {
    const map = { Aptitude: "blue", Coding: "purple", Verbal: "yellow", Technical: "green" };
    return map[type] || "blue";
  };

  return (
    <div>
      <div className="page-header">
        <h1>📝 Mock Test Tracker</h1>
        <p>Your test performance history</p>
      </div>

  
      <div className="cards-grid">
        <div className="stat-card blue">
          <div className="card-label">Tests Given</div>
          <div className="card-value">{totalTests}</div>
          <div className="card-sub">Total attempts</div>
        </div>
        <div className="stat-card purple">
          <div className="card-label">Average Score</div>
          <div className="card-value">{avgScore}</div>
          <div className="card-sub">Out of 100</div>
        </div>
        <div className="stat-card green">
          <div className="card-label">Best Score</div>
          <div className="card-value">{bestScore}</div>
          <div className="card-sub">Personal best</div>
        </div>
        <div className="stat-card yellow">
          <div className="card-label">Latest Score</div>
          <div className="card-value">{latestScore}</div>
          <div className="card-sub">Most recent test</div>
        </div>
      </div>

     
      <div className="section-box">
        <h3>📊 Score History</h3>
        <div className="score-bar-group">
          {tests.map((t, i) => (
            <div className="score-bar-item" key={i}>
              <span className="sbi-label">{t.name.substring(0, 18)}…</span>
              <div className="sbi-track">
                <div
                  className="sbi-fill"
                  style={{
                    width: `${t.score}%`,
                    background: t.score >= 80 ? "var(--green)" : t.score >= 60 ? "var(--yellow)" : "var(--red)",
                  }}
                ></div>
              </div>
              <span className="sbi-val">{t.score}</span>
            </div>
          ))}
        </div>
      </div>

     
      <div className="section-box">
        <h3>📋 All Tests</h3>
        <table className="simple-table">
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Type</th>
              <th>Date</th>
              <th>Score</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((t, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 600 }}>{t.name}</td>
                <td><span className={`tag ${typeColor(t.type)}`}>{t.type}</span></td>
                <td style={{ color: "var(--text2)", fontSize: 12 }}>{t.date}</td>
                <td style={{ fontFamily: "JetBrains Mono, monospace", fontWeight: 600 }}>
                  {t.score}/{t.total}
                </td>
                <td>
                  <span className={`tag ${getScoreColor(t.score)}`}>
                    {t.score >= 80 ? "Excellent" : t.score >= 60 ? "Pass" : "Needs Work"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
      <div className="section-box">
        <h3>💡 Improvement Areas</h3>
        {[
          { area: "Coding (DP problems)", suggestion: "Practice more LeetCode medium DP questions" },
          { area: "Verbal Ability", suggestion: "Read 1 article daily and practice RC passages" },
          { area: "Speed", suggestion: "Time yourself – aim to finish 10 questions in 15 mins" },
        ].map((item, i) => (
          <div key={i} style={{
            padding: "12px 14px", background: "var(--surface2)",
            borderRadius: 8, marginBottom: 8, borderLeft: "3px solid var(--accent)",
          }}>
            <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>{item.area}</div>
            <div style={{ fontSize: 12, color: "var(--text2)" }}>{item.suggestion}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MockTest;