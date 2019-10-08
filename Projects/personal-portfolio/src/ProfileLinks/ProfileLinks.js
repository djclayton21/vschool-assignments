import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

const ProfileLinks = () => {
    return (
        <section className="links">
            <div className="links-linkedin">
                <a href="https://www.linkedin.com/in/djclayton21/" target="_blank" rel="noopener noreferrer" >LinkedIn</a>
                <span>23</span>
            </div>
            <div className="links-github">
                <a href="https://github.com/djclayton21" target="_blank" rel="noopener noreferrer" >Github</a>
                <span>52</span>
            </div>
            <div className="links-resume">
                <Link to='/resume' >Resume</Link>
                <span>132</span>
            </div>
        </section>
    );
}
 
export default ProfileLinks;