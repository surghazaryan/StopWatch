import React, { useCallback, useEffect, useState } from "react";
import "./StopWatch.scss";
const StopWatch = () => {
  const [hours, setHours] = useState(0);
  const [minut, setMinut] = useState(0);
  const [second, setSecond] = useState(0);
  const [msecond, setMsecond] = useState(0);
  const [stop, setStop] = useState(true);

  const onStart = useCallback(() => {
    setStop(false);
  }, []);

  const onStop = useCallback(() => {
    setStop(true);
  }, []);

  const onReset = useCallback(() => {
    setHours(0);
    setMinut(0);
    setSecond(0);
    setMsecond(0);
  }, []);

  useEffect(() => {
    let interval;
    if (!stop) {
      interval = setInterval(() => {
        if (minut > 59) {
          setHours(hours + 1);
          setMinut(0);
          clearInterval(interval);
        }
        if (second > 59) {
          setMinut(minut + 1);
          setSecond(0);
          clearInterval(interval);
        }
        if (msecond > 999) {
          setSecond(second + 1);
          setMsecond(0);
          clearInterval(interval);
        }
        if (msecond <= 999) {
          setMsecond(msecond + 1);
        }
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });
  return (
    <div className="container">
      <div className="stopwatch">
        <div className="time-parent">
         <div className="time">
         <div>
            <h1>{hours}:{minut}:{second}:{msecond}</h1>
          </div>
         </div>
          <div className="parent-btn">
              <button onClick={onStart}>Start</button>
          
        
              <button onClick={onStop}>Stop</button>
          
           
              <button onClick={onReset}>Reset</button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
