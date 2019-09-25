import React from 'react'
import Shiny from './Shiny.js'

function ShinyList(props){
    const mappedShinys = props.shinyThings.map((thing => (
        <Shiny {...thing} 
            deleteShinyThings = {props.deleteShinyThings} 
            key= {thing._id} 
            updateShinyThings = {props.updateShinyThings}
        />
    )))
    return (
        <div className="shiny-list">
            {mappedShinys}
        </div>
    )
}
export default ShinyList