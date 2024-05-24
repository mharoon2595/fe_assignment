import React, { useState, useRef, useEffect } from "react";

const Timer = () => {
  const initialTime = 25 * 60;
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isActive && !isPaused) {
      //checking if timer has been started and is not paused, if both are true, the countdown starts/resumes
      timerRef.current = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      // if the timer has been paused the current interval is cleaned up
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isActive, isPaused]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleReset = () => {
    clearInterval(timerRef.current); // here the interval stored in the ref is cleared and the timer is reset to 25 minutes.
    setIsActive(false);
    setIsPaused(false);
    setTime(initialTime);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center text-5xl dark:text-slate-300">
        {formatTime(time)}
      </div>
      <div className="flex gap-5">
        <button
          className="bg-green-500 h-10  p-2 rounded-md  text-xl hover:scale-110"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="bg-yellow-400 h-10  p-2 rounded-md text-xl hover:scale-110"
          onClick={handlePause}
        >
          Pause
        </button>
        <button
          className="bg-cyan-400 h-10  p-2 rounded-md text-xl hover:scale-110"
          onClick={handleResume}
        >
          Resume
        </button>
        <button
          className="bg-red-400 h-10 p-2 rounded-md text-xl hover:scale-110"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
