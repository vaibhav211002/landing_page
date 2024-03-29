import React from 'react'
import { Link } from 'react-router-dom'
import './Styling/Home.css'
import './js files/script'

function Navbar() {
  return (
  <nav className='container'>
    <ul className="navLinks">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>

  </nav>  )
}

export default Navbar