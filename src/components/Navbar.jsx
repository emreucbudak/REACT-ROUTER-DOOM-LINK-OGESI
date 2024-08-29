import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/aboutUS'>About US</Link>

    </nav>
  )
}

export default Navbar