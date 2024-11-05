import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './Admission.css';
import axios from 'axios';

function Admission() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        dob: '',
        course: '',
        message: ''
    });

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/forms/admission', formData);
            console.log(response.data.message);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Failed to submit admission form:', error);
            alert('There was an error submitting the form. Please try again.');
        }
    };

    return (
        <div>
            {/* Admission Page Header */}
            <section className="sub-header">
                <Navigation />
                <div className="text-box">
                    <h1>Admission Form</h1>
                </div>
            </section>

            {/* Admission Form */}
            <section className="admission-form">
                <h2>Apply for Admission</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name:</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth:</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="course">Desired Course:</label>
                        <select
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a course</option>
                            <option value="btech">B.Tech</option>
                            <option value="bsc">B.Sc</option>
                            <option value="mtech">M.Tech</option>
                            <option value="msc">M.Sc</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Additional Information:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit" className="hero-btn red-btn">Submit Application</button>
                </form>
            </section>

            <Footer />
        </div>
    );
}

export default Admission;
