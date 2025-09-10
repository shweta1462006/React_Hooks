import React from 'react'
import { useState, useRef } from 'react'

export default function Stopwatch2() {
    const [time, setTimer] = useState(null);
    const [now, setNow] = useState(null);
    const timestore = useRef(null)


    const handlestart = () => {
    if (timestore.current !== null) return;
     setTimer(Date.now())
    setNow(Date.now())
     timestore.current = setInterval(() => {    
     setTimer(Date.now())}, 30);
    }
    
    const handlestop = () => {
        clearInterval(timestore.current)
     }

     let passtime = (time - now)/1000
    return (
        <div>
            <h1>Simple layout of stop watch</h1>
            <h2> StopWatch:{passtime.toFixed(3)}</h2>
            <button onClick={handlestart}>Start</button>
            <button onClick={handlestop}>Stop</button>
        </div>
    )
}
