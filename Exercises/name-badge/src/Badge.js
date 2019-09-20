import React from 'react'

function Badge(props){
    const {firstName, lastName, email, birthPlace, phone, food, bio, bgColor} = props;
    console.log(bgColor)
    return (
        <div className="badge">
            <div className="badge-header" style = {{backgroundColor: bgColor}}>Badge</div>
            <div className= 'badge-name'>Name: {firstName + " " + lastName} </div>
            <div className= 'badge-phone'>Phone: {phone} </div>
            <div className= 'badge-birth'>Place of birth: {birthPlace} </div>
            <div className= 'badge-food'>Favorite food: {food} </div>
            <div className= 'badge-email'>Email: {email} </div>
            <div className= 'badge-bio'>{bio} </div>
            <div className="badge-bio"></div>
        </div>
    )
}

export default Badge