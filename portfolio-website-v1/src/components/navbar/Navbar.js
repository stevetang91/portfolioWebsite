import React, { useState }from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                Logo <i class="fa-regular fa-snowflake"></i>
            </Link>
            <Link to='/portfolio' className='navbar-portfolio'>
                Portfolio
            </Link>
            <Link to='/about' className='navbar-about'>About</Link>
            <Link to='/contact' className='navbar-contact'>Contact</Link>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
