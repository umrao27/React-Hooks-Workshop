import React, { useContext } from 'react';
import { MyContext } from './ComponentA';

const ComponentB = ({ }) => {
  const countContext = useContext(MyContext);
  return (
    <div className="componentB">
      <span>Component B Counter - {countContext.countState}</span>
      <button type="button" class="btn btn-primary" onClick={() => countContext.countDispatch('INCREMENT')}>INCREMENT</button>
      <button type="button" class="btn btn-primary" onClick={() => countContext.countDispatch('DECREMENT')}>DECREMENT</button>
      <button type="button" class="btn btn-primary" onClick={() => countContext.countDispatch('RESET')}>RESET</button>
    </div>
  )
}

export default ComponentB;