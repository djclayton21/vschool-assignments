import React from 'react';
import './style.css'
import Intro from './Intro';
import ProfileLinks from '../ProfileLinks/ProfileLinks';
// import SectionLinks from '../SectionLinks/SectionLinks';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <main className="home">
            <Intro />
            <Skills />
            <Projects />
        </main>
    );
}
 
export default Home;