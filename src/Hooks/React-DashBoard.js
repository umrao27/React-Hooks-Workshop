/**List of hooks -

1. useState - Returns a stateful value, and a function to update it.
2. useEffect - Accepts a function that contains imperative, possibly effectful code.
3. useRef - useRef returns a mutable ref object whose.current property is initialized to the passed argument(initialValue)
4. useContext - Accepts a context object(the value returned from React.createContext) and returns the current context value for that context
5. useReducer - An alternative to useState.Accepts a reducer of type(state, action) => newState, and returns the current state paired with a dispatch method
6. useCallback - Returns a memoized callback.
7. useMemo - Returns a memoized value.
8. useImperativeHandle
9. useLayoutEffect
10. useDebugValue




*/


import React from 'react';
import '../styles/main.scss';

const DashBoard = ({ }) => {

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <a>React</a>
            {/* <iframe src="demo_iframe.htm" height="200" width="300"></iframe> */}
          </div>
          <div class="col-sm-6">
            <a>React Hooks</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard;

