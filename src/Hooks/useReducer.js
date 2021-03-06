/** An alternative to useState. Accepts a reducer of type (state, action) => newState, 
 *  and returns the current state paired with a dispatch method.
 *  It's basically used to handle component lable (local lable) state 
 * */

import React, { useReducer } from 'react';


const UseReducerExample = ({ }) => {

  /**
   *  reducer - Callback method (which accepts 2 param - state,action)
   *  initialState - initial value like we pass in useState
   *  state - This will assign the value, we pass to initialState
   *  dispatch -  We can pass dispatch down instead of callbacks.
   */
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  };

  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="reducerLayout">
      <span>Use Reducer</span>
      <div className="componentA">
        <span>{`Counter - ` + counter}</span>
        <button type="button" class="btn btn-primary" onClick={() => dispatch('INCREMENT')}>INCREMENT</button>
        <button type="button" class="btn btn-primary" onClick={() => dispatch('DECREMENT')}>DECREMENT</button>
        <button type="button" class="btn btn-primary" onClick={() => dispatch('RESET')}>RESET</button>
      </div>
    </div>
  )
}

export default UseReducerExample;

