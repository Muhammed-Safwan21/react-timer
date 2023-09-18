import React, { useRef, useState } from 'react';
import './Timer.css'

function Timer() {
  const timer1 = useTimer();
  const timer2 = useTimer();

  return (
    <div className="timer-container">
      <div className="timer">
        <h1>Timer 1</h1>
        <div className='timer-value'>{timer1.value}</div>
        <div className='buttons'>
          <button onClick={timer1.start}>Start</button>
          <button onClick={timer1.stop}>Stop</button>
          <button onClick={timer1.reset}>Reset</button>
          
        </div>
      </div>

      <div className="timer">
        <h1>Timer 2</h1>
        <div className='timer-value'>{timer2.value}</div>
        <div className='buttons'>
          <button onClick={timer2.start}>Start</button>
          <button onClick={timer2.stop}>Stop</button>
          <button onClick={timer2.reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Timer;



function useTimer(){
    const interval =useRef()
    const [value,setValue]=useState(0);

    const start = ()=>{

        interval.current = setInterval(() => {
            setValue(value=>value+1)
            
        }, 1000);
    }
    const stop= ()=>{
        clearInterval(interval.current)

    }
    const reset =()=>{
        stop();
        setValue(0);
    }

    return {value,start,stop,reset}
}