import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [user,setUser] = useState('');
    const [pass,setPass] = useState('');
    const navigate = useNavigate();
  return (
    <div>
        Username
        <input type='text' onChange={(e)=>setUser(e.target.value)}/>
        Password
        <input type='text' onChange={(e)=>setPass(e.target.value)}/>
        <button onClick={()=>{
            if(user=='admin' && pass=='admin123')
                alert("Succesfully Logged in")
            else
                navigate('/invalid')
        }}>Submit</button>
    </div>
  )
}

export default Login