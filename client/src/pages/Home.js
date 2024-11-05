import React from 'react';
import Navigation from '../components/Navigation';
import TextBox from '../components/TextBox';
import Courses from '../components/Courses';
import Campus from '../components/Campus';
import Facilities from '../components/Facilities';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Navigation />
            <TextBox />
            <Courses />
            <Campus />
            <Facilities />
            <Testimonials />
            <CallToAction />
            <Footer />
        </div>
    );
}

export default Home;
