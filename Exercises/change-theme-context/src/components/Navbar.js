import React from 'react'
import {withTheme} from '../context/ThemeProvider.js'

function Navbar(props){
    return (
        <div className={`navbar navbar-${props.theme}`}>
            <div className="link">Home</div>
            <div className="link">About</div>
            <div className="link">Products</div>
        </div>
    )
}

export default withTheme(Navbar)