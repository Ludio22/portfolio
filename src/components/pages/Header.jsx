import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className="header">
            <div className="container">
            <svg width="1440" height="306" viewBox="0 0 1440 306" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M352.5 90L-67 233L-191 -71H1522L1649.5 305L1151 87L928 115.5L643 90H352.5Z" fill="#5B6EE1" stroke="black"/>
</svg>

                <p className="header__title">Jambulat Mairov</p>
                <nav className="header__nav">
                    <Link to="/" className="header__link">home</Link>
                    <Link to="/about" className="header__link">about me</Link>
                    <Link to="/projects" className="header__link">projects</Link>
                    <Link to="/contact" className="header__link">contact</Link>            
                </nav>
            </div>
        </header>
    );  
}

export default Header;
