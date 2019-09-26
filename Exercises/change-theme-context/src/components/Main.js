import React from 'react'
import {withTheme} from '../context/ThemeProvider'


function Main(props){
    return (
        <div className= {`main main-${props.theme}`}>
            <h1>Change Theme:</h1>
                <select onChange = {props.changeTheme} >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="neon">Neon</option>
                </select>
            <h1>Change Layout:</h1>
            <select >
                    <option value="split">Split</option>
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
            </select>
        </div>
    )
}

export default withTheme(Main)