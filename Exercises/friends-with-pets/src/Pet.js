import React from 'react'

function Pet(props){
    return(
        <div>
            <span>Name: {props.name} </span>
            <span>Breed: {props.breed}</span>
        </div>
    )
}
export default Pet