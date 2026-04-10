import React, { useState } from 'react';

/**
 * Contact Component
 * Converts the contact section with:
 * - Form validation using controlled components
 * - Form submission handling
 */
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Handle input changes (controlled components)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission (replaces original form submit event)
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Please fill in all fields');
            return;
        }

        // Success message
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section id="contact">
            <h2 className="section-title">Let's Work Together</h2>
            <div className="contact-cta">
                <p>
                    I'm currently looking for new opportunities and collaborations.
                    Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>
                <div className="cta-highlight">Available for Freelance & Full-time Roles</div>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <h4>Location</h4>
                            <p>Anand, Gujarat</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <p>[EMAIL_ADDRESS]</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-graduation-cap"></i>
                        </div>
                        <div>
                            <h4>Full Stack Developer</h4>
                            <p>Red and White Group of Institutes</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-heart"></i>
                        </div>
                        <div>
                            <h4>Interests</h4>
                            <p>Cricket, Music, Travelling, Social Work</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Your Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                placeholder="Your Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            <i className="fas fa-paper-plane"></i>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
