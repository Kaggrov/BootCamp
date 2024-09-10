import React, { useReducer, useState } from "react";

const ReducerDemo = () => {
  // const [count,setCount] = useState(0);

  const InitialState = 0;
  const reducer = (state,action) => {
    console.log(state);
    console.log(action);
    if(action.type === 'INCREMENT'){
        return state+1;
    }
    else if(action.type === 'DECREMENT'){
        return state-1;
    }
  }

  const [state,dispatch] = useReducer(reducer, InitialState);

  return (
    <div>
      ReducerDemo
      <div style={{ textAlign: "center" }}>
        {/* <p>count : {count}</p> */}
        {/* <button onClick={()=>setCount(prev => prev+1)}>Increase</button>
            <button onClick={()=>setCount(prev => prev-1)}>Decrease</button> */}
        <p>Count :- {state}</p>
        <button onClick={() => dispatch({type:'INCREMENT'})}>Increase</button>
        <button onClick={() => dispatch({type:'DECREMENT'})}>Decrease</button>
      </div>
    </div>
  );
};

export default ReducerDemo;
