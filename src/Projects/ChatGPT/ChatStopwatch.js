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

  return (
    <div>
      <p>{time}</p>
      <button onClick={handleStartStop}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;