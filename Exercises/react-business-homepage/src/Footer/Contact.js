import React from 'react'

function Contact(props) {
    return(
        <div className = 'contact'>
            <div>{props.position}</div>      
            <div>{props.name}</div>
            <div>{props.phone}</div> 
            <div>{props.email}</div>     
        </div>
    )
}

export default Contact