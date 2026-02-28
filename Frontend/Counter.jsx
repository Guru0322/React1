import { useState, useEffect } from "react";
import "../Stylesheet/Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const MAX_LIMIT = 100;
  const MIN_LIMIT = 0;

  // Load saved value from localStorage
  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    if (savedCount !== null) {
      setCount(Number(savedCount));
    }
  }, []);

  // Save value to localStorage
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
    <div className="counter-container">
      <h1 className="counter-title">Advanced Counter</h1>

      <div className="counter-value">{count}</div>

      <div className="step-input">
        <label>Step: </label>
        <input
          type="number"
          value={step}
          min="1"
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>

      <div className="button-group">
        <button
          onClick={increase}
          disabled={count >= MAX_LIMIT}
          className="increase-btn"
        >
          Increase
        </button>

        <button
          onClick={decrease}
          disabled={count <= MIN_LIMIT}
          className="decrease-btn"
        >
          Decrease
        </button>

        <button onClick={reset} className="reset-btn">
          Reset
        </button>
      </div>

      <p className="limit-text">
        Min: {MIN_LIMIT} | Max: {MAX_LIMIT}
      </p>
    </div>
  );
}

export default Counter;
