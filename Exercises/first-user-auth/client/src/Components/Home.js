import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../Context/UserProvider.js';
import Photo from './Photo.js';

const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config
})

const Home = () => {
    const { logout } = useContext(UserContext);

    const [ userPhotos, setUserPhotos ] = useState([])

    useEffect(() => {
        userAxios.get('/api/photos/user')
            .then(res => {
                setUserPhotos(res.data)
            })
            .catch(err => console.error(err.response.data.errMsg))
    }, [])

    return (
        <div className="home">
            <button className="logout" onClick={logout} >Logout</button>
            {userPhotos.length > 0 && userPhotos.map(photo => (
                <Photo {...photo} key={photo._id} />
            ))}
        </div>
    );
}
 
export default Home;