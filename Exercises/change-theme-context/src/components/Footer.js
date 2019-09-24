import React from 'react'
import {withTheme} from '../context/ThemeProvider.js'

function Footer(props){
    return (
        <div className={`footer footer-${props.theme}`}>
            <div className="link">Name</div>
            <div className="link">Email</div>
            <div className="link">Address</div>
        </div>
    )
}

export default withTheme(Footer)