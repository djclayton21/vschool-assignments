import React from 'react'

function Navbar(){
    const layout = {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        border: '1px solid black'
    }
    return(
        <div className= 'navbar' style = {layout}>
            <div>Home</div>
            <div>Reservations</div>
            <div>Events</div>
            <div>Map</div>
        </div>
    )
}
export default Navbar