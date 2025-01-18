import React, { useState, useEffect } from "react";
import LightButton from "../../assets/websites/light-mode-button.png";
import DarkButton from "../../assets/websites/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ?? "light"
  );

  useEffect(() => {
    const element = document.documentElement; // Get the root element (html)
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="relative">
      {/* Light Mode Button */}
      <img
        src={LightButton}
        alt="Dark Mode"
        onClick={handleThemeToggle}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
      {/* Dark Mode Button */}
      <img
        src={DarkButton}
        alt="Light Mode"
        onClick={handleThemeToggle}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
          theme === "light" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkMode;
