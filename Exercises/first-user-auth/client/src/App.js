import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './Context/UserProvider.js';
import Auth from './Components/Auth/Auth.js';
import Home from './Components/Home.js'


const App = () => {
    const { token } = useContext(UserContext)
    return (
        <div className="app">
            <Switch>
                <Route path='/auth'>
                    {token ? <Redirect to='/' /> : <Auth />}
                </Route>
                <Route path='/' >
                    {!token ? <Redirect to='/auth' /> : <Home />}
                </Route>
            </Switch>
        </div>
    );
}
 
export default App;