import React from 'react';
import './App.css';

import UseStateExample from './Hooks/useState';
import UseReducerExample from './Hooks/useReducer';
import UseEffectExample from './Hooks/useEffect';
import UseContextExample from './Hooks/useContext/parent';

function App() {
  return (
    <div className="App">
      <UseStateExample />
      <hr />
      <UseEffectExample />
      <hr />
      <UseReducerExample />
      <hr />
      <UseContextExample />
    </div>
  );
}

export default App;
