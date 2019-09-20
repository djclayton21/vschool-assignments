import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import Services from './Services.js'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import './style.css'

function App() {
    return (
        <div className="app">
            <Navbar />
            <Switch>
                <Route exact path= "/" component = {Home}/>
                <Route path= "/about" component = {About}/>
                <Route path= "/services" component = {Services}/>
            </Switch>
            <Footer />
        </div>
    )
}

export default App