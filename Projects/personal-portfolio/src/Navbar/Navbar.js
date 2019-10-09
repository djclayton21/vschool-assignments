import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {
    return (
        <header className="navbar">
            <Link to='/' >Home</Link>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            {/* dropdown */}
            <a href="https://www.linkedin.com/in/djclayton21/" target="_blank" rel="noopener noreferrer" >LinkedIn</a>
            <a href="https://github.com/djclayton21" target="_blank" rel="noopener noreferrer" >Github</a>
            <Link to='/resume' >Resume</Link>
        </header>
    );
}
 
export default Navbar;