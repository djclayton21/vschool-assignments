import React from 'react'
import Badge from './Badge'

function BadgeContainer(props) {
    const {badges} = props

    return (
        <div className="badge-container">
            {badges.map((badge, i) => <Badge {...badge} key = {i} bgColor = {i % 2 ? 'blue':'red'}/>)}
        </div>
    )
}

export default BadgeContainer