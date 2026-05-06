import { useState, useEffect } from "react";

function DSA({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLeetCode = async () => {
      setLoading(true);
      setError("");
      try {

        const res = await fetch(
          `https://alfa-leetcode-api.onrender.com/${username}/solved`
        );
        if (!res.ok) throw new Error("Could not fetch data");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(
          "Could not load LeetCode data. The free API server may be slow. Showing sample data."
        );
        setData({
          solvedProblem: 148,
          easySolved: 72,
          mediumSolved: 58,
          hardSolved: 18,
          totalSolved: 148,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCode();
  }, [username]);

  const recentSubmissions = [
    { title: "Two Sum", difficulty: "Easy", status: "Accepted", lang: "JavaScript" },
    { title: "Longest Substring Without Repeating Characters", difficulty: "Medium", status: "Accepted", lang: "C++" },
    { title: "Merge Intervals", difficulty: "Medium", status: "Wrong Answer", lang: "Java" },
    { title: "Binary Tree Level Order Traversal", difficulty: "Medium", status: "Accepted", lang: "Python" },
    { title: "Trapping Rain Water", difficulty: "Hard", status: "Accepted", lang: "C++" },
  ];

  const topicsToRevise = [
    { topic: "Arrays & Strings", done: 85 },
    { topic: "Linked Lists", done: 60 },
    { topic: "Trees & Graphs", done: 45 },
    { topic: "Dynamic Programming", done: 30 },
    { topic: "Backtracking", done: 20 },
  ];

  const diffColor = (d) => {
    if (d === "Easy") return "green";
    if (d === "Medium") return "yellow";
    return "red";
  };

  return (
    <div>
      <div className="page-header">
        <h1>💻 DSA Tracker</h1>
        <p>LeetCode stats for @{username}</p>
      </div>

      {error && <div className="error-box">⚠️ {error}</div>}

      {loading ? (
        <div className="loading-box">
          <div className="spinner"></div>
          Fetching LeetCode data...
        </div>
      ) : (
        <>
        
          <div className="cards-grid">
            <div className="stat-card purple">
              <div className="card-label">Total Solved</div>
              <div className="card-value">{data?.solvedProblem || data?.totalSolved || 0}</div>
              <div className="card-sub">out of ~3000+</div>
            </div>
            <div className="stat-card green">
              <div className="card-label">Easy</div>
              <div className="card-value">{data?.easySolved || 0}</div>
              <div className="card-sub">problems solved</div>
            </div>
            <div className="stat-card yellow">
              <div className="card-label">Medium</div>
              <div className="card-value">{data?.mediumSolved || 0}</div>
              <div className="card-sub">problems solved</div>
            </div>
            <div className="stat-card" style={{ borderLeft: "3px solid var(--red)" }}>
              <div className="card-label">Hard</div>
              <div className="card-value" style={{ color: "var(--red)" }}>{data?.hardSolved || 0}</div>
              <div className="card-sub">problems solved</div>
            </div>
          </div>

          <div className="section-box">
            <h3>📊 Difficulty Breakdown</h3>
            <div className="difficulty-grid">
              <div className="diff-card easy">
                <div className="diff-num">{data?.easySolved || 0}</div>
                <div className="diff-label">Easy ✅</div>
              </div>
              <div className="diff-card medium">
                <div className="diff-num">{data?.mediumSolved || 0}</div>
                <div className="diff-label">Medium 🔥</div>
              </div>
              <div className="diff-card hard">
                <div className="diff-num">{data?.hardSolved || 0}</div>
                <div className="diff-label">Hard 💪</div>
              </div>
            </div>
          </div>

         
          <div className="section-box">
            <h3>📚 Topic-wise Progress</h3>
            {topicsToRevise.map((t) => (
              <div className="progress-bar-wrap" key={t.topic}>
                <div className="progress-bar-label">
                  <span>{t.topic}</span><span>{t.done}%</span>
                </div>
                <div className="progress-track">
                  <div
                    className={`progress-fill ${t.done >= 70 ? "green" : t.done >= 40 ? "yellow" : "purple"}`}
                    style={{ width: `${t.done}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="section-box">
            <h3>🕐 Recent Submissions</h3>
            <table className="simple-table">
              <thead>
                <tr>
                  <th>Problem</th>
                  <th>Difficulty</th>
                  <th>Language</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentSubmissions.map((s, i) => (
                  <tr key={i}>
                    <td>{s.title}</td>
                    <td><span className={`tag ${diffColor(s.difficulty)}`}>{s.difficulty}</span></td>
                    <td style={{ color: "var(--text2)", fontSize: 12 }}>{s.lang}</td>
                    <td>
                      <span className={`tag ${s.status === "Accepted" ? "green" : "red"}`}>
                        {s.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default DSA;