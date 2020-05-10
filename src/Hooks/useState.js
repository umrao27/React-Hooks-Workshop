/** Returns a stateful value, and a function to update it. */

import React, { useState } from 'react';

const UseStateExample = ({ }) => {

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

  return (
    <div className="stateLayout">
      <span>Use State</span>
      <div className="componentA">
        <span>{`Counter - ` + counter}</span>
        <button type="button" class="btn btn-primary" onClick={handleIncrement}>INCREMENT</button>
        <button type="button" class="btn btn-primary" onClick={handleDecrement}>DECREMENT</button>
        <button type="button" class="btn btn-primary" onClick={handleReset}>RESET</button>
      </div>
    </div>
  )
}

export default UseStateExample;