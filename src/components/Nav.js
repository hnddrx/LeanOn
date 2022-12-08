import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logopic.jpg'
import '../assets/Nav.css'
import Logout from './Logout'

const Nav = () => {
  return (
    <nav className='nav'>
       <div className='logo'>
            <img src={logo} alt='Logo'/>
       </div>
       <div className='menu-logged'>
            <div>
                <Link to='/psychiatrist'>Psychiatrist</Link>
            </div>
            <div>
                <Link to='/book'>Book</Link>
            </div>
            <div>
                <Link to='/appointment'>Appointments</Link>
            </div>
          {/*   <div>
                <Link to='#'>Payment</Link>
            </div> */}
            <div>
                <Link to='/profile'>Profile</Link>
            </div>
            <Logout />
       </div>
    </nav>
  )
}

export default Nav