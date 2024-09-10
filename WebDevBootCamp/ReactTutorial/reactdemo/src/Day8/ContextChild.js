import React, { useContext } from 'react';
import { GlobalInfo } from './ContextParent.js';

const ContextChild = () => {
  const { colorVal,getData } = useContext(GlobalInfo);
  
  return (
    <div>
      ContextChild
      <p style={{color:colorVal}}>ColorVal: {colorVal}</p>
      <button onClick={()=>getData("Hello from Context child")}>Click Context</button>
    </div>
  );
}

export default ContextChild;
