import React, { useState } from 'react'

const Show = () => {

    const [vis,setVis] = useState(true)
  return (
    <div >
        <div style={{backgroundColor:'blue',display:(vis)?'block':'none',width:'100px',height:'100px'}} ></div>
        <button onClick={()=>setVis(!vis)}>TO show CLick </button>
    </div>
  )
}

export default Show