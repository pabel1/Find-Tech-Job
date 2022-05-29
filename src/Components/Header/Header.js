import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {

  return (
    <div>
        <header className="header">
            <div className="container">
                <span><NavLink to="/" className="style"><h1> Find Tech Jobs </h1></NavLink></span> 
            </div>
        </header>
    </div>

  )
}
