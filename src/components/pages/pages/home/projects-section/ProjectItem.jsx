import React from 'react';
import Zoom from 'react-reveal/Zoom';

const ProjectItem = (props) => {
    let stack = props.stack.map(el => <span key={el.index}>{el}; </span>);

    return(
        <Zoom>
            <div className="projects__item">
                <div className="projects__info">
                    <h3>{props.title}</h3>
                    <p className="projects__text">{props.description}</p>
                    <p className="projects__text small">stack: {stack}</p>
                    <a className="btn" rel="noreferrer" href={props.url} target="_blank">Go to site</a>
                </div>
                <img src={props.img} alt="project-img" />
            </div>
        </Zoom>
    ); 
}

export default ProjectItem;