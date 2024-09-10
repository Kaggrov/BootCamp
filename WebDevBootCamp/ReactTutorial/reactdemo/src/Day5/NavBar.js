import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <div style={{
                    display: "flex",
                    background: 'black',
                    padding: '5px 0 5px 5px',
                    fontSize: '20px'
                }}>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' ,textDecoration:'none'})}>
                            Home
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/about" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' ,textDecoration:'none'})}>
                            About
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/contact" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' ,textDecoration:'none'})}>
                            Contact
                        </NavLink>
                    </div>
                </div>
    </div>
  )
}

export default NavBar