import React, { useState, useEffect } from "react";
import Sun from "../assets/Sun.png";
import Moon from "../assets/Moon.png";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("dark-mode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-emerald-500 text-zinc-300 dark:bg-slate-400 dark:text-black rounded-xl"
    >
      {darkMode ? (
        <div className="flex gap-2 md:gap-5 items-center ">
          <img src={Moon} className="w-5 h-5 md:w-10 md:h-10" />
          <p>Dark Mode</p>
        </div>
      ) : (
        <div className="flex gap-2 md:gap-5  items-center ">
          <img src={Sun} className="w-5 h-5 md:w-10 md:h-10" />
          <p>Light Mode</p>
        </div>
      )}
    </button>
  );
};

export default ThemeToggle;
