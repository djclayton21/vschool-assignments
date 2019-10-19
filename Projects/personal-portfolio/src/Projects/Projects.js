import React from 'react';
import './style.css'
import ProjectMap from './ProjectMap/ProjectMap';
import ProjectFull from './ProjectFull/ProjectFull';

const Projects = () => {
    const projects = [
        {
            name: 'Project 1',
            description: 'Its the first project'
        },
        {
            name: 'Project 2',
            description: 'Its the first project'
        },
        {
            name: 'Project 3',
            description: 'Its the first project'
        }

    ]
    const fullProjects = projects.map((project, i) => <ProjectFull {...project} key= {i}/>)
    return (
        <section className="projects" id="projects">
            {fullProjects}
        </section>
    );
}
 
export default Projects;