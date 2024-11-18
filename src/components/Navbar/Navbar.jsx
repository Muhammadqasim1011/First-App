import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
    <nav className='navbar'>
        <h1>Learing</h1>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/gallery'>Gallery</Link>
            </li>
            <li>
                <Link to='/Portfolio'>Portfolio</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar
