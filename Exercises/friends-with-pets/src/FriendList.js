import React from 'react'
import Friend from './Friend'

function FriendList(props) {
    const friends = props.friends.map(friend => <Friend {...friend} key = {Math.random()}/>)

    return(
        <div>
            {friends}
        </div>
    )
}

export default FriendList