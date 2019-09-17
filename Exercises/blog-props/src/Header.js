import React from 'react'
import Navbar from './Navbar'

function Header(){
    return (
        <div className = 'header'>
            <div className = 'header-overlay'></div>
            <Navbar />
            <div className = 'banner'>
                <h1>Clean Blog</h1>
                <h2>A Blog Theme by Start Bootstrap</h2>
            </div>
        </div>
    )
}

export default Header