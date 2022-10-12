import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-title'>
        <h1>Dev Quiz</h1>
      </div>
      <div className='navbar-links'>
        <Link to='/'>Home</Link>
        <Link to='/topic'>Topics</Link>
        <Link to='/statistics'>Statistics</Link>
        <Link to='/blog'>Blog</Link>
      </div>
    </nav>
  )
}

export default Header
