import React from 'react';

function Testimonials() {
    return (
        <section className="testimonials">
            <h1>What Our Students Say</h1>
            <div className="row">
                <div className="testimonials-col">
                    <img alt="User1" />
                    <div>
                        <p>GREAT ENVIRONMENT AND EXPOSURE</p>
                        <h3>RAHUL SHARMA</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
                <div className="testimonials-col">
                    <img alt="User2" />
                    <div>
                        <p>GREAT ENVIRONMENT AND EXPOSURE</p>
                        <h3>PRATEEK</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
