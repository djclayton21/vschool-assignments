import React from 'react'

function Banner() {
    const style = {
        textAlign: 'center'
    }
    return (
        <div className = 'banner' style = {style}>
            <h1>Yummy Pizza Restaurant</h1>
            <h3>We have vegan stuff for Marc</h3>
        </div>
    )
}

export default Banner