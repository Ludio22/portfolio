import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className="header">
            <svg width="1440" height="127" viewBox="0 0 1440 127" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M593.5 88C512 59.5 286.5 88 -61.5 116.5L-2025 -25.5V-160.5L4536.5 -130.5L4548.5 -12L2793.5 24.5L1550 98C1474.5 90.1667 1715 31.2981 1491.5 88C1255 148 710 128.739 593.5 88Z" fill="#5B6EE1" stroke="black"/>
</svg>

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
