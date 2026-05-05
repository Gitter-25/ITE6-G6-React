import { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [time, setTime] = useState(10);
  const [message, setMessage] = useState("Ready");
  const [isRunning, setIsRunning] = useState(false); // 👈 NEW

  useEffect(() => {
    if (!isRunning) return; // 👈 prevent auto start

    let interval;

    if (time > 0) {
      setMessage("Counting down...");

      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else {
      setMessage("Time's up!");
      setIsRunning(false); // 👈 stop when finished
    }

    return () => clearInterval(interval);
  }, [time, isRunning]); // 👈 add isRunning

  return (
    <section className="timer">
      <h2>Timer Page</h2>

      <h1>{time}</h1>
      <p>{message}</p>

      <div>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button onClick={() => {
          setTime(10);
          setIsRunning(false);
          setMessage("Ready");
        }}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default Timer;