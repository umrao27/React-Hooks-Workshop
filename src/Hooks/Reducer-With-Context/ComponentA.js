import React, { useReducer } from 'react';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ComponentD from './ComponentD';
// import '../../styles/main.scss';
export const MyContext = React.createContext();
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

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="layout">
      <span>Reducer With Context</span>
      <div className="componentA">
        <MyContext.Provider value={{ countState: count, countDispatch: dispatch }}>
          <span>Component A Counter - {count}</span>
          <ComponentB />
          <ComponentC />
          <ComponentD />
        </MyContext.Provider>
      </div>
    </div>
  )
}

export default UseReducerExample;

