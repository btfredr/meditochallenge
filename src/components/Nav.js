import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="#FAQ">FAQ</Link>
        <Link to="/start-campaign" className="cta-button">Start a Campaign</Link>
      </div>
    </nav>
  )
}

export default Nav