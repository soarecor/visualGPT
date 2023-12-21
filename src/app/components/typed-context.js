import React from "react";

// set the defaults
const TypedContext = React.createContext({
  typeId: 0,
  setId: () => {},
});

export default TypedContext;
