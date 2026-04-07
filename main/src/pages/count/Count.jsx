import "./Count.css"
import { useState } from "react";
import { Link } from "react-router-dom";

const Count = () => {

    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }


  return (
    <main className="count">
        <h4>Count demo</h4>
        <h1>Count : {count}</h1>
        <div className="buttons">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
           
        </div>
        
        link to <Link to="/home">Home</Link> page
    </main>
  );
};

export default Count;