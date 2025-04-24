import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            period: "Aug 2023 - Current",
            role: ".NET Developer ",
            company: "UF Health, Jacksonville, FL,USA",
            description: "As a .NET Developer at UF Health, I developed scalable web applications using C#, ASP.NET, MVC, and AWS, creating RESTful APIs, optimizing performance by 25%, and enhancing front-end responsiveness by 30% with Razor, jQuery, HTML5, and CSS."
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
            description: "Software Developer at Cognizant, I built dynamic web apps using ASP.NET, AngularJS, C#, and SQL Server, implementing MVC, WCF, and responsive UI with Bootstrap, jQuery, and Kendo UI, enhancing system efficiency and user experience through Agile methodologies."
        }
        
        
    ];

    return (
        <div className="experience-container">
            {/* Background Wave Elements */}
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