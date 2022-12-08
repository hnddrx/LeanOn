import React from 'react'
import { useNavigate } from 'react-router';
const Logout = () => {
    const navigate =useNavigate();
    const onLogoutHandler = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        localStorage.clear();
        navigate('/login')

        // make a popup alert showing the 'submitted' text
   
    }
  return (
    <div><button onClick={onLogoutHandler} style={{background: 'none', color: 'red', border: 'none', fontSize: '16px', borderRadius: '8%'}} >Logout</button></div>
  )
}

export default Logout