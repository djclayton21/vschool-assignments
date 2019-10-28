import React, { useState } from 'react';
import axios from 'axios';

export const UserContext = React.createContext();

const UserProvider = (props) => {
    const initUser = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || ""
    };
    const [ userState, setUserState ] = useState(initUser);
    
    const signup = (credentials) => {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('token', token)
                setUserState({user: user, token: token})
            })
            .catch(err => console.error(err))
    }
    const login = (credentials) => {
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data;
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('token', token)
                setUserState({user: user, token: token})
            })
            .catch(err => console.error(err.response.data.errMsg))
    }

    const logout = () => {
        console.log('logged out')
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setUserState({
            user: {},
            token: ""
        })
    }

    return (
        <UserContext.Provider value={{
            user: userState.user,
            token: userState.token,
            signup: signup,
            login: login,
            logout: logout
        }}>
            {props.children}
        </UserContext.Provider>
    );
}
 
export default UserProvider;
