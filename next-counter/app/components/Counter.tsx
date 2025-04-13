"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="buttons">
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      <style jsx>{`
        .counter {
          padding: 2rem;
          border-radius: 8px;
          background: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h2 {
          margin: 0 0 1.5rem 0;
          color: #333;
        }

        .buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        button:nth-child(1) {
          background-color: #ff4d4d;
          color: white;
        }

        button:nth-child(2) {
          background-color: #666;
          color: white;
        }

        button:nth-child(3) {
          background-color: #4caf50;
          color: white;
        }

        button:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
};

export default Counter;
