import React from 'react';
import './style.css';
import ProjectPin from '../ProjectPin/ProjectPin';

const ProjectMap = (props) => {
    const projectPins = props.projects.map(project => <ProjectPin {...project} />)
    return (
        <div className="project-map">
            Project Map
            {projectPins}
        </div>
    );
}
 
export default ProjectMap;