import React from 'react'
import Contact from './Contact'
import Address from './Address'

function Footer(){
    const layout = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        textAlign: 'center'
    }
    return(
        <footer className = 'footer' style = {layout}> 
            <Address />
            <Contact position = 'Executive Chef' />
            <Contact position = 'General Manager' />
        </footer>
    )
}

export default Footer