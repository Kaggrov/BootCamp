import React, { createContext, useState } from "react";
import ContextChild from "./ContextChild.js";

export const GlobalInfo = createContext();

const ContextParent = () => {
  const [color, setColor] = useState("green");

  const getData = (data) => {
    console.log(data)
  }

  return (
    <div>
      ContextParent
      <GlobalInfo.Provider value={{ colorVal: color,getData:getData }}>
        <ContextChild />
      </GlobalInfo.Provider>
    </div>
  );
};

export default ContextParent;
