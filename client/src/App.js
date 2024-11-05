import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Course from './pages/Course';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Admission from './pages/Admission';
import './App.css';
import './pages/Home.css';
import './components/Navigation.css';
import './components/TextBox.css';
import './components/Courses.css';
import './components/Campus.css';
import './components/Facilities.css';
import './components/Testimonials.css';
import './components/CallToAction.css';
import './components/Footer.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/course" element={<Course />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admission" element={<Admission />} />
            </Routes>
        </Router>
    );
}

export default App;