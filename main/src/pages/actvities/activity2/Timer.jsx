import { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [time, setTime] = useState(10); // start at 10 seconds
  const [message, setMessage] = useState("Ready");

  useEffect(() => {
    // if-else logic
    if (time > 0) {
      setMessage("Counting down...");

      const interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setMessage("Time's up!");
    }
  }, [time]);

  return (
    <section className="timer">
      <h2>Timer Page</h2>

      <h1>{time}</h1>
      <p>{message}</p>

      <div>
        <button onClick={() => setTime(10)}>Reset</button>
        <button onClick={() => setTime(0)}>Stop</button>
      </div>
    </section>
  );
};

export default Timer;