import React, { useContext } from 'react';

import { Consumer } from './Context';

const ComponentC = ({ }) => {
  return (
    <div className="componentC">
      <span>Component C </span>
      <p>Data Consumed by <b>Component C</b> provided by <b>Component A</b> without interaction with <b>Component B</b></p>
      <Consumer>
        {data => <h4>{data}</h4>}
      </Consumer>
    </div>
  )
}

export default ComponentC;