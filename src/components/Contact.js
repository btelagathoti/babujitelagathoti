import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-background"></div>
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <div className="contact-details">
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <h5>Email</h5>
                            <a href="mailto:telagathoti337@gmail.com">telagathotibabuji337@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <h5>Phone</h5>
                            <a href="tel:+1 508 410 0857">+1 508 410 0857</a>
                        </div>
                        <div className="contact-item">
                            <i className="fab fa-linkedin"></i>
                            <h5>LinkedIn</h5>
                            <a href="https://www.linkedin.com/in/babuji-telagathoti-2142b6357" target="_blank" rel="noopener noreferrer">
                                Babuji Telagathoti
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 