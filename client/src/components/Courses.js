import React from 'react';

function Courses() {
    return (
        <section className="course">
            <h1>Courses We Offer</h1>
            <div className="row">
                <div className="course-col">
                    <h3>Intermediate</h3>
                    <p>SRM SCHOOL</p>
                    <p>for classes 1st to 12th</p>
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
    );
}

export default Courses;
