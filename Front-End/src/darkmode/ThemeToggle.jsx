import React from "react";
import { useDarkMode } from "./DarkModeContext.jsx";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className="theme-toggle"
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="toggle-switch">
        <div className={`toggle-track ${isDarkMode ? "dark" : ""}`}>
          <div className="toggle-thumb">
            <span className="theme-icon sun-icon">☀️</span>
            <span className="theme-icon moon-icon">🌙</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;