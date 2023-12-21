import React from "react";

// set the defaults
const TypedContext = React.createContext({
  typeId: 1,
  setId: () => {},
});

export default TypedContext;
