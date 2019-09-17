import React from 'react'
import Navbar from './Navbar'

function Header(){
    
    return (
        <div className = 'Header'>
            <Navbar />
            <div className = 'banner'>
                <h1>Clean Blog</h1>
                <h3>A Blog Theme by Start Bootstrap</h3>
            </div>
        </div>
    )
}

export default Header