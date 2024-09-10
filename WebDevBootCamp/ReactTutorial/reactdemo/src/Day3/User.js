import React from 'react'

const User = ({user,disp}) => {
  return (
    <div>
        <h3>Name in Child :- {user}</h3>
        <button onClick={()=>{disp("Grover")}}>Change Name</button>

       
    </div>
  )
}

export default User