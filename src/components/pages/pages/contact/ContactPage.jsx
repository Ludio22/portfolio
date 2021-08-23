import React from 'react';
import Contact from '../home/contact-section/Contact';
import Bounce from 'react-reveal/Bounce';

const ContactPage = () => {
    return(
        <div style={{
            marginTop: "calc(77px + 35px)"
        }}>
            <Bounce>
                <Contact />
            </Bounce>
        </div>
    );
}

export default ContactPage;