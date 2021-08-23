import React from 'react';
import html from "../../../../media/stack/html-5.png";
import css from "../../../../media/stack/css-3.png";
import firebase from "../../../../media/stack/firebase.png";
import js from "../../../../media/stack/js.png";
import reactImg from "../../../../media/stack/react.png";
import reduxImg from "../../../../media/stack/redux.svg";
import Bounce from 'react-reveal/Bounce';

const Stack = () => {
    return(
        <div className="container">
            <section>
                <h2>My stack</h2>
                <Bounce cascade>
                    <div className="about__stack">
                        <div className="about__technnology">
                            <img src={html} alt="tech" />
                            <p>HTML 5</p>
                        </div>

                        <div className="about__technnology">
                            <img src={css} alt="tech" />
                            <p>CSS3/SCSS</p>
                        </div>

                        <div className="about__technnology">
                            <img src={js} alt="tech" />
                            <p>JavaScript</p>
                        </div>

                        <div className="about__technnology">
                            <img src={reactImg} alt="tech" />
                            <p>React</p>
                        </div>

                        <div className="about__technnology">
                            <img src={reduxImg} alt="tech" />
                            <p>Redux</p>
                        </div>

                        <div className="about__technnology">
                            <img src={firebase} alt="tech" />
                            <p>FireBase</p>
                        </div>
                    </div>
                </Bounce>
            </section>
        </div>
    );
}

export default Stack;