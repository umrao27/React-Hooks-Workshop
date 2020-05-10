/** Accepts a function that contains imperative, possibly effectful code. */

import React, { useState, useEffect } from 'react';

const UseEffectExample = ({ }) => {

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  }
  const handleReset = () => {
    setCounter(0);
  }

  /** This callback will executes after DOM renders and set the "counter + 2" */
  useEffect(() => {
    setCounter(counter + 2);
  }, [])

  return (
    <div className="effectLayout">
      <span>Use Effect</span>
      <div className="componentA">
        <span>{`Counter - ` + counter}</span>
        <button type="button" class="btn btn-primary" onClick={handleIncrement}>INCREMENT</button>
        <button type="button" class="btn btn-primary" onClick={handleDecrement}>DECREMENT</button>
        <button type="button" class="btn btn-primary" onClick={handleReset}>RESET</button>
      </div>
    </div>
  )
}

export default UseEffectExample;