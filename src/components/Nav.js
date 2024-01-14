import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/donate">Donate</NavLink>
    {/* Add more links as needed */}
  </nav>
  )
}

export default Nav