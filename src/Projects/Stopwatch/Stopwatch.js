import React, {useState} from 'react';

let interval;

function Stopwatch() {
  const [timer, setTimer] = useState('00:00:00');
  // const [totalSeconds, setTotalSeconds] = useState(0);

  let totalSeconds = 0;

  const startTimer = () => {
    interval = setInterval(changeTime, 250)
    // setInterval(changeTime, 250)
  }

  const stopTimer = () => {
    clearInterval(interval)
    // interval = 0;

    // clearInterval()
  }

  const changeTime = () => {
    totalSeconds++;
    let splitTimer = timer.split(':');

    // let hour = splitTimer[0]
    // let minute = splitTimer[1]
    // let second = splitTimer[2]

    setTimer(secondsToHMS(totalSeconds))
  }

  // number totalSeconds => string HH:MM:SS
  const secondsToHMS = (total) => {
    console.log(total);
    let HH = '00';
    let MM = '00';
    let SS = '00';

    console.log("MM: ", MM);

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

    console.log("MM: ", MM);

    // SS
    SS = total;



    // SS = total % 60;
    // // total = total - SS;

    // MM = (total - SS) % 3600;
    // // MM = total % 3600;
    // // total = total - MM

    // HH = (total - ((total - SS) % 86400)) % 60;
    // // HH = total
    
    



    if (SS < 10) SS = `0${SS}`
    if (MM < 10) MM = `0${MM}`
    if (HH < 10) HH = `0${HH}`

    console.log("MM: ", MM);

    // console.log(object);
    return `${HH}:${MM}:${SS}`
  }

  // 110 => 01:50



  return (
    <>
      <h1>STOPWATCH</h1>

      <h2 id="count_up_timer">{timer}</h2>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button>Reset</button>
    </>
  );
}


  // let totalSeconds;
  // function countUpTimer() {
  //   ++totalSeconds;
  //   var hour = Math.floor(totalSeconds / 3600);
  //   var minute = Math.floor((totalSeconds - hour * 3600) / 60);
  //   var seconds = totalSeconds - (hour * 3600 + minute * 60);
  //   document.getElementById("count_up_timer").innerHTML = hour + ":" + minute + ":" + seconds;
  // }

export default Stopwatch;