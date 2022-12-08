import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logopic.jpg'
import '../assets/Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
       <div className='logo'>
            <img src={logo} alt='Logo'/>
       </div>
       <div className='menu'>
        <Link to='/login'>Sign In</Link>
       </div>
    </nav>
  )
}

export default Navbar