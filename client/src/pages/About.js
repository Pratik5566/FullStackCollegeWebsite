import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './About.css';

function About() {
    return (
        <div>
            <section className="about-header">
                <Navigation />
                <div className="about-box">
                    <h1>About Us</h1>
                </div>
            </section>

            <section className="about-us">
                <div className="row">
                    <div className="about-col">
                        <h1>We are India's one of the largest private universities</h1>
                        <p>
                            Walking and cycling are the most popular ways to get around the SRM campus. With state-of-the-art security and 24-hour emergency services, it's the safest place to be.
                            The SRM group runs a fleet of buses for transporting students to and from the city and nearby areas. Public transport options are also available close to the campuses.
                        </p>
                        <a href="#" className="hero-btn-red">EXPLORE NOW</a>
                    </div>

                    <div className="about-col">
                        <img src="/images/about2.jpg" alt="About SRM" />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default About;
