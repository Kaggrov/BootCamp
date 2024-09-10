import React,{useState} from 'react'

const Button = ({disp,setDisp}) => {
    console.log(disp)

  return (
    <div>
        <button onClick={()=>{setDisp((prev)=>!prev)}} data-testid="button">Click Here</button>
        <h1 style={{display:disp?'block':'none'}} data-testid="text">I am visible !!!</h1>
    </div>
  )
}

export default Button