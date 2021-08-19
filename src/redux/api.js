import { useDispatch, useSelector } from 'react-redux';
import firebase from '../firebase';

const fire = firebase.firestore().collection("projects");

export const getProjectItems = () => {
    const projects = useSelector(state => state.projects.items);
    const dispatch = useDispatch(); 

    return (
        <div>
            {projects.map(el => <ProjectItem title={el.name} description={el.description} img={el.img} slug={el.slug} />)}
        </div>
    )
}