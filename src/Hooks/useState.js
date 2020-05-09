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
    <>
      <div>{`useState Example Counter - ` + counter}</div>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={handleReset}>RESET</button>
    </>
  )
}

export default UseStateExample;