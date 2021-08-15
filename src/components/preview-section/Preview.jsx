import React from 'react';
import avatar from '../../media/me_portfolio.png';
import AboutMe from './body/AboutMe';
import Avatar from './body/Avatar';

const Preview = () => {
    return(
        <section className="preview">
            <div className="container">
                <Avatar avatar={avatar}/>
                <AboutMe />
            </div>
        </section>
    );
}

export default Preview;