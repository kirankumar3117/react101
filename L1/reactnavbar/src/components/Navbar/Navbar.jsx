import React from 'react'
import Middlenav from '../middlenav/middlenav'
import "./Navbar.css"
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <h5>LOGOBAKERY</h5>
      </div>
      <div className='FLEX'>
        <Middlenav/>
      </div>
     
      
       <button>Contact</button>
     
  

    </div>
  )
}
