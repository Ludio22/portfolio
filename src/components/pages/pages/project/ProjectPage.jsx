import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { upLoadProject } from '../../../../redux/reducers/projectsInfo';
import ProjectItem from '../home/projects-section/ProjectItem';

const ProjectPage = () => {
    const projectInfo = useSelector(state => state.projects.currentProject);
    const dispatch = useDispatch();
    const slug = useParams();

    useEffect(() => {
        dispatch(upLoadProject(slug.slug));
    }, [dispatch, slug]);

    return(
        <div>
            {projectInfo !== null &&
            <ProjectItem 
            key={projectInfo.id} 
            title={projectInfo.name} 
            description={projectInfo.description} 
            img={projectInfo.img} 
            slug={projectInfo.slug}
            />
            }
        </div>
    );
}

export default ProjectPage;