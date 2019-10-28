import React, { useState, useContext } from 'react';
import AuthForm from './AuthForm.js';
import { UserContext } from '../../Context/UserProvider.js';

const Auth = () => {
    const initUserForm = {username: "", password: ""};
    const [ formToggle, setFormToggle ] = useState(true);
    const [ userForm, setUserForm ] = useState(initUserForm)
    const { signup, login } = useContext(UserContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm((prevUserForm) => (
            {
                ...prevUserForm,
                [name]: value
            }
        ))
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        signup({userName: userForm.username, password: userForm.password});
        setUserForm(initUserForm);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        login({userName: userForm.username, password: userForm.password});
        setUserForm(initUserForm);

    };
    return (
        <div className="auth">
            {formToggle ?
                <AuthForm buttonText="Signup" userForm={userForm} handleChange={handleChange} handleSubmit={handleSignupSubmit} />
                :
                <AuthForm buttonText="Login" userForm={userForm} handleChange={handleChange} handleSubmit={handleLoginSubmit} />
            }
            <button className="auth-toggle" onClick={() => setFormToggle(!formToggle)} >Toggle</button>
        </div>
    );
}
 
export default Auth;