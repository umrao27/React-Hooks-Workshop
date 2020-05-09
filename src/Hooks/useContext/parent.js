import React from 'react';

import Child from './child';
import { Provider } from './context';

const Parent = ({ }) => {
  return (
    <>
      <h3>Parent Component</h3>
      <Provider value='2707'>
        <Child />
      </Provider>
    </>
  )
}

export default Parent;