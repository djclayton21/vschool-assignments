import React from 'react'
import Pet from './Pet'

function Friend(props){
    const pets = props.pets.map(pet => <Pet {...pet} key = {Math.random()} />)
    return(
        <div className = 'friend-container'>
            <h1>{props.name}</h1>
            <p> Age: {props.age}</p>
            <div>
                {pets}
            </div>
        </div>
    )
}

export default Friend