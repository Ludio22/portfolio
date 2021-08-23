import React from 'react';
import avatar from '../../../../../media/me_portfolio.webp';
import AboutMe from './body/AboutMe';
import Avatar from './body/Avatar';

const Preview = (props) => {
    return(
        <section className="preview">
            <div className="container">
                <Avatar avatar={avatar}/>
                <AboutMe about={props.about} />
            </div>
        </section>
    );
}

export default Preview;