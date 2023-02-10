import React, { useState, useEffect } from "react";
import './Stopwatch.css'

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(time => time + 1);
      }, 10);
    } else {
      setTime(0);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const handleStartStop = () => {
    setIsRunning(running => !running);
  };

  const handleReset = () => {
    setIsRunning(false);
    setLaps([]);
  };

  const handleLap = () => {
    setLaps(prevLaps => [...prevLaps, time]);
  };

  const formatTime = time => {
    const hours = Math.floor((time / (60 * 60 * 60)) % 60);
    const minutes = Math.floor((time / (60 * 60)) % 60);
    const seconds = Math.floor((time / (60)) % 60);
    const milliseconds = Math.floor(time %  60);

    return `${
        hours.toString().padStart(2, "0")
      }:${
        minutes.toString().padStart(2, "0")
      }:${
        seconds.toString().padStart(2, "0")
      }.${
        milliseconds.toString().padStart(2, "0")
    }`;
  };

  return (
    <div id="outer">
      <h1>STOPWATCH</h1>

      <div id="watch">
        <div id="screen" className="center">
          <div id="screenText">
            {formatTime(time)}
          </div>
        </div>

        <div id="buttonRow">
          <button onClick={handleStartStop}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleLap} disabled={!isRunning}>Lap</button>
        </div>
      </div>

      <ul id="laps" className="center">
        {laps.map((lap, index) => (
          <li key={index}>{formatTime(lap)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Stopwatch;