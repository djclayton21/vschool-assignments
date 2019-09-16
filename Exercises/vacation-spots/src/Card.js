import React from 'react'

function Card(props) {

    let seasonColor
    switch (props.timeToGo){
        case 'Spring': 
            seasonColor = '#D6F1C6'
            break
        case 'Fall':
            seasonColor = '#F9CC87'
            break
        case 'Winter':
            seasonColor = '#FEF8FA'
            break
        case 'Summer':
            seasonColor = '#C9F1FD'
            break
        default:
            seasonColor = '#FFF'
    }
    
    let priceRange = ''
    if (props.price < 500) {
        priceRange = '$'
    } else if (props.price < 1000) {
        priceRange = '$$'
    } else {
        priceRange = '$$$'
    }
    const style = {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        maxWidth: '66%',
        background: seasonColor
    }
    const imageStyle = {
        maxWidth: '100%',
        padding: '5px'
    }
    const textStyle = {
        display: 'flex',
        flexDirection: 'column',
    }

    return (
        <div style = {style} className = 'card'>
            <img style = {imageStyle} alt = {props.place} src = {props.imgUrl}/>
            <div style = {textStyle}class="card-text">
                <h3>{props.place} ({priceRange})</h3>
                <div>Price: ${props.price}</div>
                <div>Best the best time of year to visit {props.name} is in {props.timeToGo.toLowerCase()}!</div>
            </div>
        </div>
    )
}

export default Card