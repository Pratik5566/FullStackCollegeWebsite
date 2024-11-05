import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './Blog.css';
import axios from 'axios';

function Blog() {
    const [commentData, setCommentData] = useState({
        name: '',
        email: '',
        comment: ''
    });

    // Handle input changes for the comment form
    const handleChange = (e) => {
        setCommentData({ ...commentData, [e.target.name]: e.target.value });
    };

    // Submit comment form data
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/forms/blog-comment', commentData);
            console.log(response.data.message);
            alert('Comment submitted successfully!');
            setCommentData({ name: '', email: '', comment: '' });  // Clear form after submission
        } catch (error) {
            console.error('Failed to submit comment:', error);
            alert('There was an error submitting your comment. Please try again.');
        }
    };

    return (
        <div>
            <section className="blog-header">
                <Navigation />
                <div className="blog-text-box">
                    <h1>Our Certificates & Online Programs For 2021</h1>
                </div>
            </section>

            <section className="blog">
                <div className="row">
                    {/* Blog Left Section */}
                    <div className="blog-left">
                        <img src="/images/certificate.jpg" alt="Certificate" />
                        <h2>Message from Director</h2>
                        <p>
                            The Career Centre at SRMIST encompasses the Placement Office and the Career Development Centre.
                            Career Development Centre helps to identify the interests and capabilities of students in relation to their career goals and academic progression. Students are encouraged to pursue their passion. Intensive coaching and training is provided in personality development and in shaping their leadership qualities.
                            <br/><br/>
                            The Placement Office, besides placement and training, holds workshops, events like Hackathons, Quiz competitions, conferences, expert talks, internships, and industrial visits to keep students up-to-date with contemporary trends and ensure they are ‘Market Ready’ by graduation.
                            <br/><br/>
                            We are supported and guided by our Founder & Chancellor, Dr. T. R. Paarivendhar, who has set a benchmark of excellence. This enables us to initiate pioneering efforts in the Indian higher education system. For instance, our CDC collaborates with the Career Center to enhance our students' employability.
                            <br/><br/>
                            I look forward to seeing you on campus to further develop your leadership talents.
                        </p>

                        {/* Comment Form */}
                        <div className="comment-box">
                            <h3>Leave a comment</h3>
                            <form className="comment-form" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    value={commentData.name}
                                    onChange={handleChange}
                                    placeholder="Enter Your Name"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={commentData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Your Email"
                                    required
                                />
                                <textarea
                                    name="comment"
                                    rows="5"
                                    value={commentData.comment}
                                    onChange={handleChange}
                                    placeholder="Write a comment..."
                                    required
                                ></textarea>
                                <button type="submit" className="hero-btn-red">POST COMMENT</button>
                            </form>
                        </div>
                    </div>

                    {/* Blog Right Section */}
                    <div className="blog-right">
                        <h3>Post Categories</h3>
                        <div><span>Business Analytics (21)</span></div>
                        <div><span>Computer Science (12)</span></div>
                        <div><span>Masters (08)</span></div>
                        <div><span>Programming (13)</span></div>
                        <div><span>App Developing (15)</span></div>
                        <div><span>Machine Learning (03)</span></div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Blog;
