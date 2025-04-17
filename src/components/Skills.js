import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = {
        languages: {
            title: "Languages",
            skills: ["C#", "C", "C++", ".NET", "SQL", "Python", "Java"]
        },
        webTech: {
            title: "Web Technologies",
            skills: ["HTML", "PHP", "JavaScript", "TypeScript", "Bootstrap", "Angular", "React", "CSS", "XML", "XSL", "Node JS"]
        },
        databases: {
            title: "Databases",
            skills: ["MySQL", "SQL Server"]
        },
        bigData: {
            title: "Big Data Technologies",
            skills: ["Spark", "Machine Learning", "Informatica", "Powerbi"]
        },
        integration: {
            title: "Integration Tools",
            skills: ["Oracle CPQ Application", "Azure Data Studio", "SQL Server Integration Service"]
        },
        tools: {
            title: "Tools",
            skills: ["Visual Studio Code", "Postman", "Docker", "Jenkins"]
        },
        cloud: {
            title: "Cloud",
            skills: ["Azure", "Azure DevOps", "Kubernetes", "AWS"]
        },
        os: {
            title: "Operating Systems",
            skills: ["Windows", "MacOS", "Linux"]
        },
        versionControl: {
            title: "Version Control",
            skills: ["Git"]
        }
    };

    return (
        <div className="skills-container">
            <div className="skills-background"></div>
            <h1 className="skills-title">MY SKILLS</h1>
            
            <div className="skills-map">
                <div className="skills-grid">
                    {Object.entries(skillCategories).map(([key, category], index) => (
                        <div className="skill-category" key={key} data-category={key}>
                            <div className="category-title">{category.title}</div>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div className="skill-item" key={skillIndex}>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills; 