import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{display:'flex',flexDirection:'row',gap:'15px'}}>
        <p>
            <Link to='/home'>Home</Link>
        </p>
        <p>
            <Link to='/login'>Login</Link>
        </p>

    </div>
  )
}

export default NavBar