import { useState } from "react";

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [leetcode, setLeetcode] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !leetcode.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    onLogin({ name: name.trim(), leetcode: leetcode.trim() });
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>🚀 NextStep</h1>
        <p>Track your placement preparation in one place</p>

        {error && (
          <div className="error-box" style={{ marginBottom: "16px" }}>
            {error}
          </div>
        )}

        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="e.g. Rahul Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKey}
          />
        </div>

        <div className="form-group">
          <label>LeetCode Username</label>
          <input
            type="text"
            placeholder="e.g. rahul_codes"
            value={leetcode}
            onChange={(e) => setLeetcode(e.target.value)}
            onKeyDown={handleKey}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKey}
          />
        </div>

        <button className="login-btn" onClick={handleSubmit}>
          Get Started →
        </button>
      </div>
    </div>
  );
}

export default Login;