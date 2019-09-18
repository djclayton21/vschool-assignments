import React from 'react'

function Control(props){
    
    return(
        <div className = 'Control'>
            <div className = 'Control-button' onClick = {props.button}></div>
        </div>
    )
}
export default Control