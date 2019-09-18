import React from 'react'

function Square(props){
    return (
        <div 
            className = 'Square' 
            style = {{
                backgroundColor: props.color,
                borderRadius: props.radius + '%'
            }}>
        </div>
    )
}

export default Square