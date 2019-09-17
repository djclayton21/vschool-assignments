import React from 'react'
import Friend from './Friend'

function FriendList(props) {
    const friends = props.friends.map(friend => {
        return (
            <Friend {...friend}/>
        )
    })

    return(
        <div>
            {friends}
        </div>
    )
}

export default FriendList