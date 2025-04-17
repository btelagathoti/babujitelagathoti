import React from 'react';
import Libraryimg from '../images/library.svg';
import FilmClubimg from '../images/filmclub.jpg';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Library Management System",
            description: "A comprehensive library management solution",
            image: Libraryimg,
            details: {
                technologies: ["ASP.NET", "C#","Razor View", "HTML5", "CSS3","Bootstrap","SQL Server"],
                features: [
                    "User authentication and authorization",
                    "Book catalog management",
                    "Admin can add,edit,delete books",
                ],
                projectLink: "https://github.com/yourusername/library-project" 
            }
        },
        {
            title: "Film Club Website",
            description: "Dynamic film club community platform",
            image: FilmClubimg,
            details: {
                technologies: ["React","JavaScript", "Node.js", "MongoDB"],
                features: [
                    "Movie reviews and ratings",
                    "User discussion forums",
                    "Event scheduling system",
                ],
                projectLink: "https://github.com/yourusername/library-project" 
            }
        }
    ];

    return (
        <div className="projects-container">
            <div className="projects-background"></div>
            <h1 className="projects-title">My Projects</h1>
            
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <h5 className="project-title">{project.title}</h5>
                            <p className="project-description">{project.description}</p>
                        </div>
                        <div className="project-overlay">
                            <div className="project-details">
                                <h3>{project.title}</h3>
                                <div className="project-tech">
                                    <h4>Technologies:</h4>
                                    <div className="tech-tags">
                                        {project.details.technologies.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="project-features">
                                    <h4>Key Features:</h4>
                                    <ul>
                                        {project.details.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="project-links">
                                    <a 
                                        href={project.details.projectLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="read-more-link"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
