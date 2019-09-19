import React from 'react'

function SuperHero(props){
    console.log(props.hero.imageName)
    return (
        <div className = 'SuperHero' onClick = {() => props.event(props.hero.catchPhrase)}>
            <img className = 'SuperHero-image' src={props.hero.imageName} alt= {props.hero.name} style = {{width: '100%'}}></img>
            <div className = 'SuperHero-name'>Name: {props.hero.name}</div>
            <div className = 'SuperHero-show'>Show: {props.hero.show}</div>  
        </div>
    )
}

export default SuperHero