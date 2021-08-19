import React from 'react';
import { Link } from 'react-router-dom';

const Btn = (props) => {
    return(
          <Link to={props.url} className="btn">{props.text}</Link>
    );
}

export default Btn;