import { useState, useEffect } from "react";
// import Login from "./components/Login";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";
// import DSA from "./components/DSA";
// import Development from "./components/Development";
// import MockTest from "./components/MockTest";
// import Goals from "./components/Goals";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [activePage, setActivePage] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("nextstep_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem("nextstep_user", JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("nextstep_user");
    setUser(null);
    setActivePage("dashboard");
  };

  if (!user) {
    return (
      <div className={darkMode ? "dark" : ""}>
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  const renderPage = () => {
    switch (activePage) {
      case "dashboard": return <Dashboard user={user} />;
      case "dsa": return <DSA username={user.leetcode} />;
      case "development": return <Development />;
      case "mocktest": return <MockTest />;
      case "goals": return <Goals />;
      default: return <Dashboard user={user} />;
    }
  };

  return (
    <div className={`app-layout ${darkMode ? "dark" : ""}`}>
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        user={user}
        onLogout={handleLogout}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;