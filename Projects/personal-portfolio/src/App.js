import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './style.css'
import Home from './Home/Home.js';
import Resume from './Resume/Resume';


const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route exact path='/' component= {Home} />
                <Route path='/resume/' component= {Resume} />
            </Switch>
        </div>
    );
}
 
export default App;
