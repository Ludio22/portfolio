import React from 'react';
import Fade from 'react-reveal/Fade';

const AboutMe = (props) => {
    return(
      <Fade right cascade>
        <div className="about">
          <p className="about__title">Front-end/HTML developer</p>
          <h1>Hello, my name is Jambulat</h1>
          <p className="about__text">{props.about}</p>  
        </div>
      </Fade>
    );
}

export default AboutMe;