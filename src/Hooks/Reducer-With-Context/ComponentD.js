import React, { useContext } from 'react';
import { MyContext } from './ComponentA';

const ComponentD = ({ }) => {
  const countContext = useContext(MyContext);
  return (
    <div className="componentD">
      <span>Component D Counter - {countContext.countState}</span>
      <button type="button" class="btn btn-primary" onClick={() => countContext.countDispatch('INCREMENT')}>INCREMENT</button>
      <button type="button" class="btn btn-primary" onClick={() => countContext.countDispatch('DECREMENT')}>DECREMENT</button>
      <button type="button" class="btn btn-primary" onClick={() => countContext.countDispatch('RESET')}>RESET</button>
    </div >
  )
}

export default ComponentD;