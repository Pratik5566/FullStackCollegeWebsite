import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <section className="footer">
            <h4>ABOUT US</h4>
            <p>EXCEL IN YOUR CAREER WITH US AND LEAD IN YOUR LIFE</p>
            <div className="icons">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <i className="fa fa-twitch" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
            </div>
            <p>Made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="#">GROUP 8</a></p>
        </section>
    );
}

export default Footer;
