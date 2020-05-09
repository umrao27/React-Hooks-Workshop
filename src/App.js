import React from 'react';
import './App.css';

import UseStateExample from './Hooks/useState';
import UseReducerExample from './Hooks/useReducer';
import UseEffectExample from './Hooks/useEffect';
import UseContextExample from './Hooks/useContext/parent';
// import DashBoard from './Hooks/React-DashBoard';


function App() {
  return (
    <div className="App">
      {/* <DashBoard /> */}
      <UseStateExample />
      <hr />
      <UseReducerExample />
      <hr />
      <UseEffectExample />
      <hr />
      <UseContextExample />
    </div>
  );
}

export default App;
