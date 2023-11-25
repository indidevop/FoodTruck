import dataContext from "./dataContext";
import { useState } from "react";

import React from "react";

const DataState = (props) => {
  const [page, setpage] = useState(1);
  return (
    <dataContext.Provider value={{ page, setpage }}>
      {props.children}
    </dataContext.Provider>
  );
};

export default DataState;
