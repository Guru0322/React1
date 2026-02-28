import { useState, useEffect } from "react";
import "../Stylesheet/Counter.css";
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const MAX_LIMIT = 100;
  const MIN_LIMIT = 0;

  // Load saved count from localStorage
  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    if (savedCount !== null) {
      setCount(Number(savedCount));
    }
  }, []);

  // Save count to localStorage
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const increase = () => {
    if (count + step <= MAX_LIMIT) {
      setCount(count + step);
    }
  };

  const decrease = () => {
    if (count - step >= MIN_LIMIT) {
      setCount(count - step);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Advanced Counter</h1>
      <h2>{count}</h2>

      <div style={{ marginBottom: "20px" }}>
        <label>Step Value: </label>
        <input
          type="number"
          value={step}
          min="1"
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>

      <button onClick={increase} disabled={count >= MAX_LIMIT}>
        Increase
      </button>

      <button
        onClick={decrease}
        disabled={count <= MIN_LIMIT}
        style={{ marginLeft: "10px" }}
      >
        Decrease
      </button>

      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>

      <p style={{ marginTop: "20px" }}>
        Min: {MIN_LIMIT} | Max: {MAX_LIMIT}
      </p>
    </div>
  );
}

export default Counter;
