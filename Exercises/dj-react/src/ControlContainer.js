import React from 'react'
import Control from './Control.js'

function ControlContainer(props) {
    return (
        <div className = 'Control-container'>
            <Control button = {props.button1}/>
            <Control button = {props.button2}/>
            <Control button = {props.button3}/>
            <Control button = {props.button4}/>
            <Control button = {props.button5}/>
            <Control button = {props.button6}/>
            <Control button = {props.button7}/>
            <Control button = {props.button8}/>
        </div>
    )
}

export default ControlContainer