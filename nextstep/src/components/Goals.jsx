import { useState } from "react";

const defaultGoals = [
  { id: 1, text: "Solve 3 LeetCode problems", done: false },
  { id: 2, text: "Push code to GitHub", done: false },
  { id: 3, text: "Watch 1 DSA lecture video", done: true },
  { id: 4, text: "Attempt a mock aptitude test", done: false },
  { id: 5, text: "Revise binary search concepts", done: true },
  { id: 6, text: "Update resume", done: false },
];

function Goals() {
  const [goals, setGoals] = useState(defaultGoals);
  const [newGoal, setNewGoal] = useState("");

  const toggleGoal = (id) => {
    setGoals(goals.map((g) => (g.id === id ? { ...g, done: !g.done } : g)));
  };

  const addGoal = () => {
    if (!newGoal.trim()) return;
    const newItem = { id: Date.now(), text: newGoal.trim(), done: false };
    setGoals([...goals, newItem]);
    setNewGoal("");
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter((g) => g.id !== id));
  };

  const handleKey = (e) => {
    if (e.key === "Enter") addGoal();
  };

  const done = goals.filter((g) => g.done).length;
  const total = goals.length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div>
      <div className="page-header">
        <h1>🎯 Daily Goals</h1>
        <p>Track what you want to accomplish today</p>
      </div>


      <div className="cards-grid">
        <div className="stat-card green">
          <div className="card-label">Completed</div>
          <div className="card-value">{done}</div>
          <div className="card-sub">Goals done today</div>
        </div>
        <div className="stat-card yellow">
          <div className="card-label">Remaining</div>
          <div className="card-value">{total - done}</div>
          <div className="card-sub">Still to go</div>
        </div>
        <div className="stat-card purple">
          <div className="card-label">Progress</div>
          <div className="card-value">{percent}%</div>
          <div className="card-sub">Today's completion</div>
        </div>
      </div>

      
      <div className="section-box">
        <h3>📊 Today's Progress — {done}/{total} Goals</h3>
        <div className="progress-track" style={{ height: 14, marginBottom: 8 }}>
          <div
            className="progress-fill green"
            style={{ width: `${percent}%`, transition: "width 0.4s ease" }}
          ></div>
        </div>
        <p style={{ fontSize: 12, color: "var(--text2)" }}>
          {percent === 100
            ? "🎉 Amazing! All goals completed!"
            : percent >= 50
            ? "👍 Good progress, keep going!"
            : "💪 You can do it — tick off more goals!"}
        </p>
      </div>

      
      <div className="section-box">
        <h3>📝 Goal Checklist</h3>

        {goals.length === 0 && (
          <p style={{ color: "var(--text2)", fontSize: 14, textAlign: "center", padding: "24px 0" }}>
            No goals yet. Add one below!
          </p>
        )}

        {goals.map((g) => (
          <div key={g.id} className={`goal-item ${g.done ? "done" : ""}`}>
            <div
              className="goal-checkbox"
              onClick={() => toggleGoal(g.id)}
            >
              {g.done && "✓"}
            </div>
            <span className="goal-text" style={{ flex: 1 }}>{g.text}</span>
            <button
              onClick={() => deleteGoal(g.id)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "var(--text2)", fontSize: 16, padding: "0 4px",
                lineHeight: 1, borderRadius: 4,
              }}
              title="Delete goal"
            >
              ×
            </button>
          </div>
        ))}

     
        <div className="add-goal-row">
          <input
            type="text"
            placeholder="Add a new goal for today..."
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            onKeyDown={handleKey}
          />
          <button onClick={addGoal}>+ Add</button>
        </div>
      </div>

   
      <div className="section-box" style={{ borderLeft: "4px solid var(--accent)" }}>
        <h3>🌟 Motivation</h3>
        <p style={{ fontSize: 15, color: "var(--text2)", fontStyle: "italic", lineHeight: 1.7 }}>
          "The secret of getting ahead is getting started. Small daily improvements lead to
          staggering long-term results."
        </p>
        <p style={{ fontSize: 12, color: "var(--accent)", marginTop: 8, fontWeight: 600 }}>
          — Keep grinding, placement season is close!
        </p>
      </div>
    </div>
  );
}

export default Goals;