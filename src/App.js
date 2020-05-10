import React from 'react';
import './App.css';

import UseStateExample from './Hooks/useState';
import UseReducerExample from './Hooks/useReducer';
import UseEffectExample from './Hooks/useEffect';
import UseContextExample from './Hooks/useContext/ComponentA';
import ReducerWithContextExample from './Hooks/Reducer-With-Context/ComponentA';

import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <UseStateExample />
      <hr />
      <UseReducerExample />
      <hr />
      <UseEffectExample />
      <hr />
      <UseContextExample />
      <hr />
      <ReducerWithContextExample />
    </div>
  );
}

export default App;
