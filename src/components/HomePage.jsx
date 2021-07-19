import React from 'react'
import {Link} from "react-router-dom"

export default function HomePage() {
  return (
    <div className="Home">
      <h1>EveryPenny</h1>
      <h3>A place for you to track your finances!</h3>
      <h4>Click the button below to get started!</h4>
      <div className="home-button"><Link to="/create-new">
        <button>Get Started!</button>
        </Link>
        </div>
    </div>
  )
}
