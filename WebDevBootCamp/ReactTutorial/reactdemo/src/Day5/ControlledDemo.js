import React, { useRef, useState } from 'react'

const ControlledDemo = () => {
    const [val,setValue] =  useState('Initial');
    const inputRef = useRef(); //ref needed to handle uncontrolled component

  return (
    <div>
        <input value={val} onChange={(e)=>setValue(e.target.value)}/>
        <input ref={inputRef}/> 
        <p>Value:{val}</p>
        
        <button onClick={()=>inputRef.current.value = "Changed Ref value"}>Change Ref value</button>
    </div>
  )
}

export default ControlledDemo