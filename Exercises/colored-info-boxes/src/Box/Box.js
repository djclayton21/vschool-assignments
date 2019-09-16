import React from 'react'

function Box(props){
    const style = {
        backgroundColor: props.backgroundColor,
        border: '2px solid black',
        margin: '2px 0'
    }
    return (
        <div style = {style} className = {props.backgroundColor}>
            <h1>{props.title} </h1>
            <h3>{props.subTitle} </h3>
            <p>{props.info} </p>
        </div>
    )
}

export default Box