import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <p className="header__title">Jambulat Mairov</p>
                <nav className="header__nav">
                    <Link to="/" className="header__link">Home</Link>
                    <Link to="/about" className="header__link">About Me</Link>
                    <Link to="/projects" className="header__link">Projects</Link>
                    <Link to="/contact" className="header__link">Contact</Link>            
                </nav>
            </div>
        </header>
    );  
}

export default Header;
