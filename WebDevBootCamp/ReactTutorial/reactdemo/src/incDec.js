import React, { useState } from 'react'

const IncDec = () => {
const [current,setCurrent] =  useState(1)
  return (
    <div>
        <p>{current}</p>
        <button onClick={()=>setCurrent(current=>current+1)}>Increment</button><button onClick={()=>{setCurrent(current=>current-1)}}>Decrement</button>
    </div>
  )
}

export default IncDec