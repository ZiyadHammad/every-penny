import React from 'react'
import {Link} from "react-router-dom"


export default function Navbar() {
  return (
    
      
    <nav>
      
        <ul className="Navbar-options">
      <Link to="/">
       <li>Home</li>
      </Link>
      <Link to="/create-new">
        <li>Create New</li>
        </Link>
        <Link to="/view-log">
          <li>View Log</li>
          </Link>
      </ul>
      
        </nav>
      
    
  )
}
