# 🚀 NextStep — Placement Readiness Tracker

> A clean, interactive React dashboard that brings your entire placement preparation into one place — DSA progress, dev projects, mock tests, and daily goals.
# Live Link - https://placement-track-weld.vercel.app/
---

## 📌 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Key Concepts Used](#-key-concepts-used)
- [Screenshots](#-screenshots)
- [Author](#-author)

---

## 🧭 Overview

Students preparing for campus placements juggle multiple platforms — LeetCode for DSA, GitHub for projects, random spreadsheets for test scores. There's no single view of "how ready am I?"

**NextStep** solves this by giving you a unified, real-time dashboard to track everything that matters before placement season.

---

## 🎯 Problem Statement

| Pain Point | How NextStep Solves It |
|------------|------------------------|
| DSA progress is scattered across LeetCode | Fetches your LeetCode stats automatically via API |
| No visibility into development work | Tracks projects, tech stack, and coding hours |
| Mock test scores forgotten after each test | Stores and visualizes test history with score trends |
| Daily goals get lost in notes/to-do apps | Interactive checklist with real-time completion tracking |
| No single "readiness score" | Dashboard shows overall % readiness across all sections |

---

## ✨ Features

### 🔐 Login Page
- Enter your **Name**, **LeetCode Username**, and **Password**
- Data is saved using `localStorage` — stays logged in on refresh
- Redirects to the dashboard after login

### 📊 Dashboard
- Personalized **welcome banner** with today's date
- **4 stat cards** — Total Tasks, Completed, Pending, Readiness %
- **Progress bars** for DSA, Development, Mock Tests, and Goals
- **Daily quick tips** to guide your study session

### 💻 DSA Tracker
- **Live data** fetched from the LeetCode public API using your username
- Shows total problems solved, broken down by **Easy / Medium / Hard**
- **Topic-wise progress bars** — Arrays, DP, Trees, Graphs, Backtracking
- Recent submissions table with difficulty tags and acceptance status
- Graceful fallback to mock data if the API is unavailable

### 🧑‍💻 Development Tracker
- Project table with **name, description, tech stack, and status**
- Status labels: `Completed`, `In Progress`, `Planned`
- **Technologies learned** displayed as visual pills
- **Weekly coding hours** shown as a horizontal bar chart

### 📝 Mock Test Tracker
- Summary cards — Tests given, Average score, Best score, Latest score
- **Score history bar chart** — color-coded by performance (green/yellow/red)
- Full test history table with date, type, and result tags
- Improvement suggestions based on weak areas

### 🎯 Goals Page
- **Daily checklist** — add, check off, and delete goals
- Real-time **progress bar** and completion percentage
- Goals persist in component state throughout the session
- Motivational quote section at the bottom

### 🌗 Dark / Light Mode
- Toggle between themes from the sidebar
- Smooth transition using CSS variables and class switching

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| **React (JSX)** | Component-based UI, state management, lifecycle |
| **JavaScript (ES6+)** | Logic, async/await, array methods |
| **CSS** | Custom properties, Flexbox, Grid, animations |
| **Fetch API** | Calls the LeetCode public stats API |
| **localStorage** | Persists user login data across browser sessions |
| **Vite** | Fast development server and bundler |

---

## 📁 Project Structure

```
nextstep/
├── public/
├── src/
│   ├── components/
│   │   ├── Login.jsx        # Login form with localStorage
│   │   ├── Sidebar.jsx      # Navigation, user info, dark mode toggle
│   │   ├── Dashboard.jsx    # Overview with stats and progress
│   │   ├── DSA.jsx          # LeetCode API integration + topic tracker
│   │   ├── Development.jsx  # Projects table and tech stack
│   │   ├── MockTest.jsx     # Test history and score visualization
│   │   └── Goals.jsx        # Interactive daily checklist
│   ├── App.jsx              # Root component — routing and global state
│   ├── App.css              # All styles with CSS variables for theming
│   └── main.jsx             # React DOM entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or above)
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/nextstep.git

# 2. Navigate into the project
cd nextstep

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

### Open in browser
```
http://localhost:5173
```

> **Note:** The LeetCode API used (`alfa-leetcode-api.onrender.com`) is a free public service and may take 10–30 seconds to respond on first load due to cold starts. The app automatically falls back to sample data if it times out.

---

## 🧠 Key Concepts Used

These concepts are important for understanding how the app works (especially for viva):

### `useState`
Used in **Goals**, **Login**, **App**, and **DSA** to manage:
- Checklist item state (done/not done)
- Form input values
- Which page is currently active
- Dark mode toggle

```jsx
const [goals, setGoals] = useState(defaultGoals);
const toggleGoal = (id) => {
  setGoals(goals.map(g => g.id === id ? { ...g, done: !g.done } : g));
};
```

### `useEffect`
Used in **DSA** to trigger the API call when the component mounts:

```jsx
useEffect(() => {
  fetchLeetCodeData(); // runs once when component loads
}, [username]);
```

### `fetch` API
Used to retrieve live LeetCode statistics:

```jsx
const res = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`);
const data = await res.json();
```

### `localStorage`
Used to remember the logged-in user between page refreshes:

```jsx
localStorage.setItem("nextstep_user", JSON.stringify(userData)); // on login
const saved = localStorage.getItem("nextstep_user");              // on app load
localStorage.removeItem("nextstep_user");                         // on logout
```

### Component-Based Architecture
The app is split into **7 focused components**, each responsible for one section. `App.jsx` acts as the controller — it holds the user state and renders the right component based on `activePage`.

### Props
Data flows **top-down** from `App.jsx` to child components:

```jsx
<DSA username={user.leetcode} />
<Dashboard user={user} />
<Sidebar onLogout={handleLogout} darkMode={darkMode} setDarkMode={setDarkMode} />
```

---

## ⚠️ Notes

- **Development** and **Mock Test** sections use mock/static data to simulate real-world usage
- The LeetCode API is a **free third-party service** — not affiliated with LeetCode officially
- Passwords are not validated or stored securely — this is a **UI-only** demo feature
- All data resets on logout (except localStorage user info)

---

## 🎓 Conclusion

NextStep demonstrates how React can be used to build a real-world, component-driven dashboard application. It brings together:

- **API integration** for live data
- **State management** for interactivity
- **Local persistence** for session handling
- **Modular design** for clean, maintainable code

Built as a React Capstone Project to showcase practical frontend development skills.

---

## 👨‍💻 Author

**Your Name**  
React Capstone Project — B.Tech CSE  
[GitHub](https://github.com/your-username) · [LeetCode](https://leetcode.com/your-username)
