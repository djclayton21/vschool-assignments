import React from 'react';
import './style.css'
import Intro from './Intro';
import ProfileLinks from '../ProfileLinks/ProfileLinks';

const Home = () => {
    return (
        <main className="home">
            <Intro />
            <ProfileLinks />
        </main>
    );
}
 
export default Home;