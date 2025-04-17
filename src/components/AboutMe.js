import React from 'react';
import './AboutMe.css';
import babujiPic from '../images/babujiPic.jpeg';
const AboutMe = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            
            <div className="about-content">
                
                <div className="profile-section">
                    <div className="profile-image-container">
                        <img src={babujiPic} alt="Profile" className="about-profile-image" />
                    </div>
                    <h2 className="profile-name">Babuji Telagathoti</h2>
                </div>
                <div className="info-section">
                    {/* Technology Section */}
                    <div className="info-block">
                        <div className="info-icon">
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <div className="info-content">
                            <h3>Software Developer</h3>
                            <p className="info-title">Web Technologies like HTML, PHP, JavaScript, TypeScript, Bootstrap, Angular, React,ASP.NET, Rajor view's  CSS, XML, XSL, Node JS</p>
                            <p className="info-description">Passionate about creating web applications using modern frameworks including ASP.NET4/5, RecatJs, AngularJs</p>
                        </div>
                    </div>

                    {/* Location Section */}
                    <div className="info-block">
                        <div className="info-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="info-content">
                            <h3>Location</h3>
                            <p className="info-title">Jacksonville, Florida, USA</p>
                            
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="info-block">
                        <div className="info-icon">
                            <i className="fas fa-graduation-cap"></i>
                        </div>
                        <div className="info-content">
                            <h3>Education</h3>
                            <p className="info-title">Information Technology</p>
                            <p className="info-description">Master's at saint Francis college with gpa 3.5</p>
                            <p>Jan 2023 to Dec 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe; 