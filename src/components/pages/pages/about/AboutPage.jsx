import React from 'react';
import Preview from '../home/preview-section/Preview';
import Stack from './Stack';

const AboutPage = () => {
    return(
        <div className="about-page container">
          <Preview about="I have been doing front-end development for over a year. Previously, I was only engaged in HTML layouts and a little later I tried JavaScript, then I began to develop in this direction. Since the beginning of 2021, he began to study ReactJS in conjunction with Redux, which gave even more scope for building sites. Now, to increase the functionality of the sites, I began to integrate FireBase from google into my sites. If you need a website or a simple HTML / CSS layout, I will be glad to help you." />
          <Stack />
        </div>
    );
}

export default AboutPage;