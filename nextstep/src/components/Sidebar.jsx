const navItems = [
  { id: "dashboard", icon: "📊", label: "Dashboard" },
  { id: "dsa", icon: "💻", label: "DSA Tracker" },
  { id: "development", icon: "🧑‍💻", label: "Development" },
  { id: "mocktest", icon: "📝", label: "Mock Tests" },
  { id: "goals", icon: "🎯", label: "Goals" },
];

function Sidebar({ activePage, setActivePage, user, onLogout, darkMode, setDarkMode }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">🚀</div>
        <div>
          <h2>NextStep</h2>
          <span>Placement Tracker</span>
        </div>
      </div>

      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${activePage === item.id ? "active" : ""}`}
          onClick={() => setActivePage(item.id)}
        >
          <span className="nav-icon">{item.icon}</span>
          {item.label}
        </button>
      ))}

      <div className="sidebar-bottom">
        <div className="user-info">
          <div className="user-name">👤 {user.name}</div>
          <div className="user-lc">@{user.leetcode}</div>
        </div>
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"} {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button className="logout-btn" onClick={onLogout}>
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;