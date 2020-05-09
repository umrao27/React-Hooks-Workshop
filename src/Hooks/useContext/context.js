/** Context provides a way to pass data through the component tree without having to pass props down manually at every level. */
/** Returns a stateful value, and a function to update it. */

import React from 'react';

const MyContext = React.createContext();
export const Provider = MyContext.Provider;
export const Consumer = MyContext.Consumer;

// create n number of context...
