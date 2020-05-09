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
    <>
      <div>{`useEffect Example Counter - ` + counter}</div>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={handleReset}>RESET</button>
    </>
  )
}

export default UseEffectExample;