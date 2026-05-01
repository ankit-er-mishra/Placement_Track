import { useEffect } from 'react';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [userName, setUserName] = useState('');
  const [data, setData] = useState(null);

  const handleSave = () => {
    localStorage.setItem("leetcodeUser", userName);
    alert("Username saved!");
  };

  const fetchData = (user) => {
    fetch(`https://alfa-leetcode-api.onrender.com/${user}`)
      .then(res => res.json())
      .then(res => {
        console.log("API DATA:", res);
        setData(res);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    const saved = localStorage.getItem("leetcodeUser");
    if (saved) {
      setUserName(saved);
      fetchData(saved);
    }
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>NextStep</h1>

      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter LeetCode username"
      />

      <button onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default App;