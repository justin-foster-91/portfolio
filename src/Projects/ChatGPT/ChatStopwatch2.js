import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const handleStartStop = () => {
    setIsRunning(running => !running);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = time => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${
      hours.toString().padStart(2, "0")}:${
      minutes.toString().padStart(2, "0")}:${
      seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <p>{formatTime(time)}</p>
      <button onClick={handleStartStop}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;