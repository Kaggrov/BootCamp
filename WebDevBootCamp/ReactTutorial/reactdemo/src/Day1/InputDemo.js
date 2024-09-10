import React, { useState } from 'react'

const InputDemo = () => {
    const [current,setCurrent] = useState("")
  return (
    <div>
        <p>INput Demo</p>
        <input onChange={(e)=>{setCurrent(e.target.value)}}/>
        <p>{current}</p>
    </div>
  )
}

export default InputDemo