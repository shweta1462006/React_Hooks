import React, { useState, useRef } from 'react';

export default function Conversion() {
  const [second, setSecond] = useState(0);
  const [minute1, setMintues1] = useState(0);
  const [time, setTimer] = useState(0); // hours
  const passtime = useRef(null);

  const SecondConversion = () => {
    if (passtime.current !== null) return;

    passtime.current = setInterval(() => {
      // ⏱️ Increment seconds
      setSecond(prevSecond => {
        if (prevSecond + 1 >= 60) {
          setMintues1(prevMin => {
            // ⏳ Also handle hours if minutes reach 60
            if (prevMin + 1 >= 60) {
              setTimer(prevHour => prevHour + 1);
              return 0; // reset minutes to 0
            }
            return prevMin + 1;
          });
          return 0; // reset seconds to 0
        }
        return prevSecond + 1;
      });
    }, 1000); // 1 second
  };

  const stop = () => {
    clearInterval(passtime.current);
    passtime.current = null;
  };

  const reset = () => {
    stop();
    setSecond(0);
    setMintues1(0);
    setTimer(0);
  };

  return (
    <div>
      <h1>Manual Time Conversion (Functional)</h1>

      <h2>Hours: {time}</h2>
      <h3>Minutes: {minute1}</h3>
      <h4>Seconds: {second}</h4>

      <button onClick={SecondConversion}>Start Timer</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
