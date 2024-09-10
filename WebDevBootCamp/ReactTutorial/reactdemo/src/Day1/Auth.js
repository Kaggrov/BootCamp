import React, { useState } from 'react'
import Admin from './Admin.js'
import User from './User.js'
 
const Auth = () => {
    const [auth,setAuth] = useState(true)
  return (
    <div>
    Authorization
    {
        auth?<Admin/> :<User/>
    }
    <button onClick={()=>{setAuth(!auth)}}>Change Authentication</button>       
    </div>
  )
}

export default Auth