import React, { useContext } from 'react';

import { Consumer } from './context';

const GrandChild = ({ }) => {
  return (
    <>
      <div>
        <h3>GrandChild Component</h3>
        <p>Data Consumed by <b>GrandChild</b> provided by <b>Parent</b> without interaction with <b>Child</b> component</p>
        <Consumer>
          {data => <h4>{data}</h4>}
        </Consumer>
      </div>
    </>
  )
}

export default GrandChild;