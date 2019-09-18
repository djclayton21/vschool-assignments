import React from 'react'
import Square from './Square.js'

function SquareContainer(props) {
    // const colors = props.colors.map(color => <Square color = {color} key = {Math.random()} />)
    return (
        <div className = 'Square-container'>
            <Square color = {props.colors[0]} radius = {props.radii[0]}/>
            <Square color = {props.colors[1]} radius = {props.radii[1]}/>
            <Square color = {props.colors[2]} radius = {props.radii[2]}/>
            <Square color = {props.colors[3]} radius = {props.radii[3]}/>
        </div>
    )
}
export default SquareContainer