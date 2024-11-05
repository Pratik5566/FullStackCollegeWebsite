import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './Course.css';

function Course() {
    return (
        <div>
            <section className="course-header">
                <Navigation />
                <div className="course-text-box">
                    <h1>Our Courses</h1>
                </div>
            </section>

            <section className="course">
                <h1>What We Offer</h1>
                <p>Providing great Facilities</p>
                <div className="row">
                    <div className="course-col">
                        <h3>Intermediate</h3>
                        <p>SRM SCHOOL</p>
                        <p>For classes 1st to 12th</p>
                    </div>
                    <div className="course-col">
                        <h3>Degree</h3>
                        <p>B.Tech, B.Sc, LLB, B.Pharma, Hotel Management</p>
                    </div>
                    <div className="course-col">
                        <h3>Post Graduate</h3>
                        <p>M.Tech, M.Sc, M.Pharma, Hotel Management</p>
                    </div>
                </div>
            </section>

            <section className="facilities">
                <h1>Our Facilities</h1>
                <div className="row">
                    <div className="facilities-col">
                        <img src="/images/library.png" alt="Library" />
                        <h3>World Class Library</h3>
                        <p>Over 10000 books across wide genres</p>
                    </div>

                    <div className="facilities-col">
                        <img src="/images/basketball.png" alt="Play Ground" />
                        <h3>Play Ground</h3>
                        <p>Over 20+ sport facilities</p>
                    </div>

                    <div className="facilities-col">
                        <img src="/images/cafeteria.png" alt="Cafeteria" />
                        <h3>Tasty And Healthy Food</h3>
                        <p>5+ mess halls providing meals for 1000+ students at once</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Course;
