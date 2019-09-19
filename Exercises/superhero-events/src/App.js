import React  from 'react'
import data from './data.json'
import SuperHero from './SuperHero.js'
import './style.css'

function App(){

    function event(catchPhrase){
        window.alert(catchPhrase)
    }
    const heros = data.map((hero, i) => {
    
        return (
            <SuperHero hero = {hero} key = {i} event = {event}/>
        )
    })
    return (
        <div className = 'App'>
            {heros}
        </div>
    )
}

export default App