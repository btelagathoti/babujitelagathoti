import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            period: "Aug 2023 - Current",
            role: "Programmer Analyst ",
            company: "UF Health, Jacksonville, FL,USA",
            description: "At UF Health, I developed full-stack applications using React and ASP.NET Core, improved system performance, and integrated AWS services like Lambda and SQS. I contributed to modernizing legacy systems, implemented CI/CD pipelines, and collaborated in Agile teams to deliver scalable, secure, and user-friendly healthcare software solutions"
        },
        {
            period: "Jan 2023 - Dec 2024",
            role: "Capstone Project",
            company: "St Francis College Brooklyn,NewYork,USA",
            description: "Academic Experience at St Francis College (2024), I developed a Film Club web app using React, Node.js, JavaScript.js, and MongoDB, implementing RESTful APIs, CRUD operations, and responsive UI with Bootstrap, ensuring secure data handling and seamless user interaction."
        },
        {
            period: "Aug 2020 - Dec 2022",
            role: "Software Developer",
            company: "Cognizant | India",
            description: "At Cognizant, I developed full-stack web applications using ReactJS, .NET Core, and MongoDB. I refactored legacy systems, implemented RESTful APIs, ensured responsive UI/UX, and followed Agile and TDD practices. I also integrated third-party services and contributed to CI/CD pipelines, delivering scalable and maintainable enterprise software solutions.."
        }
        
        
    ];

    return (
        <div className="experience-container">
            <div className="wave-1"></div>
            <div className="wave-2"></div>
            
            <h1 className="experience-title">Experience</h1>
            
            <div className="timeline-container">
                <div className="timeline-line"></div>
                
                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-period">{exp.period}</div>
                            <h2 className="timeline-company">{exp.company}</h2>
                            <p className="timeline-role">{exp.role}</p>
                            <p className="timeline-description">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience; 