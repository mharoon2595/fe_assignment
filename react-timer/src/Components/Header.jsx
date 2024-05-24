import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="h-[10vh] dark:bg-gradient-to-r dark:from-[#1F1C2C] dark:to-[#928DAB] bg-gradient-to-r from-stone-100 to-stone-400 ] flex px-5 justify-evenly items-center text-2xl">
      <div className="text-xl md:text-3xl italic dark:text-stone-300 font-bold">
        React-Timer
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
