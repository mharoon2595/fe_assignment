import React from "react";
import Timer from "./Timer";

const MainScreen = () => {
  return (
    <div className="h-[90vh] dark:bg-gradient-to-r dark:from-[#5C258D] dark:to-[#4389A2] bg-gradient-to-r from-[#2BC0E4] to-[#EAECC6] flex flex-col justify-center py-40 items-center gap-5">
      <div className="text-5xl font-semibold dark:text-slate-300">Timer</div>
      <div>
        <Timer />
      </div>
    </div>
  );
};

export default MainScreen;
