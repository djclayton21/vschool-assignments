import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'

function Header() {
    const style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    return (
        <header className = 'header' style = {style}>
            <Banner />
            <Navbar />
        </header>
    )
}

export default Header
