import React, { useState }from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [ click, setClick ] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                Logo <i class="fa-regular fa-snowflake"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='navbar-links' onClick={closeMobileMenu}>Home</Link>
                </li> 
                <li className='nav-item'>
                    <Link to='/portfolio' className='navbar-links' onClick={closeMobileMenu}>Portfolio</Link>
                </li> 
                <li className='nav-item'>
                    <Link to='/about' className='navbar-links' onClick={closeMobileMenu}>About</Link>
                </li> 
                <li className='nav-item'>
                    <Link to='/contact' className='navbar-links' onClick={closeMobileMenu}>Contact</Link>
                </li> 
                <li className='nav-item'>
                    <Link to='/signUp' className='navbar-links' onClick={closeMobileMenu}>Sign-Up</Link>
                </li> 
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
