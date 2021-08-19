import React from 'react';
import Btn from './Btn';

const ProjectItem = (props) => {
    return(
        <div className="projects__item">
            <div className="projects__info">
                <h3>{props.title}</h3>
                <p className="projects__text">{props.description}</p>
                <Btn url={"/projects/" + props.slug} text="View More" />
            </div>
            <img src={props.img} alt="project-img" />
        </div>
    ); 
}

export default ProjectItem;