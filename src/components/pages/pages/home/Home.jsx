import React from 'react';
import Contact from './contact-section/Contact';
import Preview from './preview-section/Preview';
import Projects from './projects-section/Projects';

const Home = () => {
    return(
        <div>
            <Preview about="I am a Front-end developer from cold Russia, I love web programming, video games and fall."/>
            <Projects isBtnAll={true} />
            <Contact />
        </div>
    );
}

export default Home;