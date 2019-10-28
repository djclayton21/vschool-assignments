import React from 'react';

const AuthForm = (props) => {
    const { buttonText, handleChange, handleSubmit, userForm: { username, password } } = props;


    return (
        <form onSubmit={handleSubmit} >
            <input type="username" name="username" value={username} onChange={handleChange} required />
            <input type="password" name="password" value={password} onChange={handleChange} required />
            <button type="submit">{buttonText}</button>
        </form>
    );
}
 
export default AuthForm;