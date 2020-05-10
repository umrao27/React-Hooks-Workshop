import React from 'react';

import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import { Provider } from './Context';

const ComponentA = ({ }) => {
  return (
    <div className="contextLayout">
      <span>Use Context</span>
      <div className="componentA">
        <Provider value='Rahul'>
          <span>Component A data dispatch - Rahul </span>
          <ComponentB />
          <ComponentC />
        </Provider>
      </div>
    </div>
  )
}

export default ComponentA;