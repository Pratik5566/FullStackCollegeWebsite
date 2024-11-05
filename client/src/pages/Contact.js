import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './Contact.css';
import axios from 'axios';

function Contact() {
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle input changes for the contact form
    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
    };

    // Submit contact form data
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/forms/contact', contactData);
            console.log(response.data.message);
            alert('Message sent successfully!');
            setContactData({ name: '', email: '', message: '' }); // Clear form after submission
        } catch (error) {
            console.error('Failed to send message:', error);
            alert('There was an error sending your message. Please try again.');
        }
    };

    return (
        <div>
            {/* Contact Header Section */}
            <section className="contact-header">
                <Navigation />
                <div className="header-text-box">
                    <h1>Contact</h1>
                </div>
            </section>

            {/* Google Maps Location */}
            <section className="location">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.311398441606!2d80.03879137464811!3d12.823143087478728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f76d4cecae21%3A0x4ffbf1222ec00611!2sS.R.M%20UNIVERSITY%20-K.T.R%20Campus!5e0!3m2!1sen!2sin!4v1723440437591!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>

            {/* Contact Information Section */}
            <section className="contact-us">
                <h2>Contact Us</h2>
                <div className="row">
                    <div className="contact-col">
                        <div>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>
                                <h3>Address</h3>
                                <p>R2FR+7G5, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203</p>
                            </span>
                        </div>

                        <div>
                            <i className="fas fa-phone"></i>
                            <span>
                                <h3>Phone</h3>
                                <p>04427417000</p>
                            </span>
                        </div>

                        <div>
                            <i className="fas fa-envelope"></i>
                            <span>
                                <h3>Email</h3>
                                <p>infodesk@srmist.edu.in</p>
                            </span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-col">
                        <div className="contact-box">
                            <h3>Leave us a message</h3>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    value={contactData.name}
                                    onChange={handleChange}
                                    placeholder="Enter Your Name"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={contactData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Your Email"
                                    required
                                />
                                <textarea
                                    name="message"
                                    rows="5"
                                    value={contactData.message}
                                    onChange={handleChange}
                                    placeholder="Write a message..."
                                    required
                                ></textarea>
                                <button type="submit" className="hero-btn-red">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Contact;
