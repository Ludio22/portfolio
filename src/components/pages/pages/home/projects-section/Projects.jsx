import React from 'react';
import Btn from './Btn';
import { useEffect } from 'react';
import { setLoad, upLoadProjects } from '../../../../../redux/reducers/projectsInfo';
import { useDispatch, useSelector } from 'react-redux';
import './preloader.css';
import ProjectItem from './ProjectItem';
import { useRef } from 'react';
//.map((el, index) => <ProjectItem key={index} title={el.name} description={el.description} img={el.img} slug={el.slug} />);
const Projects = (props) => {
    const projects = useSelector(state => state.projects);
    const dispatch = useDispatch(); 
    const items = useRef(null);

    useEffect(() => {
        dispatch(upLoadProjects(0));
    }, [dispatch])

    if(projects.items.join() !== [].join()){
        items.current = projects.items.map((el) => <ProjectItem key={el.id} stack={el.stack} title={el.name} description={el.description} img={el.img} url={el.url} slug={el.slug} />);
        dispatch(setLoad("done"));
    }

    return(
        <section className="projects">
            <h2 className="projects__title">projects</h2>
            {projects.status === "loading" && 
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> 
            }
            {projects.status === "done" &&
                <div className="projects__container">
                    <div className="projects__wrapper">
                        {items.current}
                    </div>
                    {props.isBtnAll ? 
                        <Btn url="/projects" text="All Projects" />
                        :
                        <Btn upLoadProjects={() => dispatch(upLoadProjects(projects.nextItemId))} text="Next" />
                    }
                </div>
            }
            {projects.status === "error" && <h2>Error: {projects.error}</h2>}
        </section>
    );
}

export default Projects;