import React, {Component} from 'react'
import FormDisplay from './FormDisplay.js'
import BadgeContainer from './BadgeContainer'
import './style.css'

class App extends Component {
    constructor(){
        super()
        const state = {

        }
    }

    render(){
        return(
            <div className="app">
                <FormDisplay />
                <BadgeContainer />
            </div>
        )
    }
}
export default App