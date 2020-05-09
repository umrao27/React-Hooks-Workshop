import React, { useContext } from 'react';

import GrandChild from './grandChild';

const Child = ({ }) => {
  return (
    <>
      <div>
        <h3>Child Component</h3>
        <GrandChild />
      </div>
    </>
  )
}

export default Child;