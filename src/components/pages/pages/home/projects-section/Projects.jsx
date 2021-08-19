import React from 'react';
import Btn from './Btn';
import { useEffect } from 'react';
import { setLoad, upLoadProjects } from '../../../../../redux/reducers/projectsInfo';
import { useDispatch, useSelector } from 'react-redux';
import './preloader.css';
import ProjectItem from './ProjectItem';
import { useRef } from 'react';
//.map((el, index) => <ProjectItem key={index} title={el.name} description={el.description} img={el.img} slug={el.slug} />);
const Projects = () => {
    const projects = useSelector(state => state.projects);
    const dispatch = useDispatch(); 
    const items = useRef(null);

    useEffect(() => {
        dispatch(upLoadProjects());
    }, [])

    if(projects.items.join() !== [].join()){
        items.current = projects.items.map((el, index) => <ProjectItem key={index} title={el.name} description={el.description} img={el.img} slug={el.slug} />);
        dispatch(setLoad(false));
    }

    return(
        <section className="projects">
            <h2 className="projects__title">projects</h2>
            {projects.isLoad ? 
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> 
                :
                <div className="projects__container">
                    <div className="projects__wrapper">
                        {items.current}
                    </div>
                    <Btn url="/projects" text="All Projects" />
                </div>
            }
        </section>
    );
}

export default Projects;