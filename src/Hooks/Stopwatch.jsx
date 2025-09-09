import React, { useState, useRef} from 'react';

export default function Stopwatch() {
  const [Time, SetTime] = useState(0);
  const Timestore = useRef(null);
    const startTimeRef = useRef(null);
  

  const Startimer = () => {
    if (Timestore.current !== null) return;

   //Date.now() = the clock right now (when you pressed start again).
//Time = how much time already passed before pausing.


  //  startTimeRef.current = Date.now() - Time; // resume from paused time


    Timestore.current = setInterval(() => {
      SetTime(Date.now() - startTimeRef.current);
      //setTime = (Time+1)
    }, 30);
  };

  const Stoptimer = () => {
    clearInterval(Timestore.current);
    Timestore.current = null;
  };

  const Resettimer = () => {
    Stoptimer();
    SetTime(0);
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="bg-light p-5 rounded shadow text-center">
        <h1 className="mb-4">⏱️ Stopwatch</h1>
        <h2 className="display-4 mb-5">{(Time/1000).toFixed(3)} <small className="text-muted">seconds</small></h2>

        <div className="d-flex gap-3 justify-content-center">
          <button className="btn btn-success px-4" onClick={Startimer}>Start</button>
          <button className="btn btn-danger px-4" onClick={Stoptimer}>Stop</button>
          <button className="btn btn-secondary px-4" onClick={Resettimer}>Reset</button>
        </div>
      </div>
    </div>
  );
}
