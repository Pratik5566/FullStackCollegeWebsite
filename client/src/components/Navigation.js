import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
        <nav>
            <a href="#"><img src="/images/logoSRM.png" alt="Logo" /></a>
            <div className="nav-links">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/course">COURSE</a></li>
                    <li><a href="/blog">BLOG</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                    <li><a href="/admission">ADMISSION</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
