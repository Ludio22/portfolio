import React from 'react';
import { Link } from 'react-router-dom';

const Btn = (props) => {
    return(
        <div className="more">
            {props.url !== undefined ?
                <Link to={props.url} className="btn">{props.text}</Link>
                : 
                <Link onClick={props.upLoadProjects} className="btn">{props.text}</Link>
            }
        </div>
    );
}

export default Btn;