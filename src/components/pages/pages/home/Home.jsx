import React from 'react';
import Contact from './contact-section/Contact';
import Preview from './preview-section/Preview';
import Projects from './projects-section/Projects';

const Home = () => {
    return(
        <div>
            <Preview />
            <Projects />
            <Contact />
        </div>
    );
}

export default Home;