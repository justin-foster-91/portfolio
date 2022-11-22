import React, {useState, useEffect} from 'react';

function Stopwatch() {
  const [timer, setTimer] = useState('00:00:00');
  const [timerActive, setTimerActive] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    let interval;

    if (timerActive) {
      interval = setInterval(() => {
        changeTime()
      }, 250);
    }
  
    return () => clearInterval(interval);
  }, [timerActive, totalSeconds]);

  const startTimer = () => {
    setTimerActive(true)
  }

  const stopTimer = () => {
    setTimerActive(false)
  }

  const resetTimer = () => {
    setTimerActive(false)
    setTimer('00:00:00')
    setTotalSeconds(0)
  }

  const changeTime = () => {
    setTotalSeconds(totalSeconds+1)

    setTimer(secondsToHMS(totalSeconds))
  }

  // number totalSeconds => string HH:MM:SS
  const secondsToHMS = (total) => {
    let HH = '00';
    let MM = '00';
    let SS = '00';

    // HH
    if (Math.floor(total/3600)) {
      HH = Math.floor(total/3600)
      total = total - (HH * 3600)
    }

    // MM
    if (Math.floor(total/60)) {
      MM = Math.floor(total/60)
      total = total - (MM * 60)
    }

    // SS
    SS = total;

    if (SS < 10 && SS >= 0) SS = `0${SS}`
    if (MM < 10 && MM > 0) MM = `0${MM}`
    if (HH < 10 && HH > 0) HH = `0${HH}`

    return `${HH}:${MM}:${SS}`
  }

  return (
    <>
      <h1>STOPWATCH</h1>

      <h2 id="count_up_timer">{timer}</h2>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
}

export default Stopwatch;