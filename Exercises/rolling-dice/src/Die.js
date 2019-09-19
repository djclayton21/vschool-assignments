import React from 'react'

function Die(props){
    const {current, isLocked, lockDie, index} = props
    const style = {
        backgroundColor: isLocked ? 'gold' : 'white',
        borderWidth: isLocked ? 4 : 2
    }
    return (
        <div className="die" style = {style} onClick = {() => lockDie(index)}>
            {current}
        </div>
    )
}

export default Die