import React, { useState } from 'react';

export default function Usestate() {
  const [count, setCounter] = useState(0);

  const increment = () => {
    setCounter(count + 1);
  };

  const decrement = () => {
    if (count === 0) return;
    setCounter(count - 1);
  };

  return (
    <div className="container mt-5">
      <div className="card text-center p-4 shadow-sm">
        <h3 className="mb-3">React useState Counter</h3>
        <p className="fs-5">You have clicked <strong>{count}</strong></p>
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-primary" onClick={increment}>Increment</button>
          <button className="btn btn-danger" onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
}
