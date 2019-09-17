import React from 'react'
import Pet from './Pet'

function Friend(props){
    const pets = props.pets.map(pet => {
        return(
            <Pet {...pet} />
        )
    })
    return(
        <div className = {props.name}>
            <h3>{props.name}</h3><span> Age: {props.age}</span>
            <div>
                {pets}
            </div>
        </div>
    )
}

export default Friend