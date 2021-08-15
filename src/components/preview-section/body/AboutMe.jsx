import React from 'react';

const AboutMe = (props) => {
    return(
        <div className="about">
          <p className="about__title">Front-end/HTML developer</p>
          <h1>Hello, my name is Jambulat</h1>
          <p className="about__text">{props.about}</p>
        </div>
    );
}

export default AboutMe;