import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home.js'
import Colors from './Colors.js'

class App extends Component {
    constructor() {
        super()
        this.state = {
            bgColor: 'gray'
        }
    }
    render(){
        return (
            <div className="app">
                <Switch >
                    <Route exact path = "/" component = {Home}/>
                    <Route path = "/colors" render = {rProps => <Colors {...rProps} {...this.state}/>}/>
                </Switch>
            </div>
        )
    }

}
export default App