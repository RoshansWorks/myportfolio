import React from "react";
import "../stylingFiles/Projects.css";

const projects = [
  {
    title: "Password Generator",
    description:
      "A secure password generator that allows users to create random passwords based on selected criteria.",
    technologies: "HTML, CSS, JavaScript",
  },
  {
    title: "Weather Application",
    description:
      "An app that displays real-time weather information using an external weather API.",
    technologies: "HTML, CSS, JavaScript",
  },
  {
    title: "Expense Tracker Web Application",
    description:
      "A full-stack application to manage personal expenses with CRUD operations via RESTful APIs.",
    technologies: "Spring Boot, Java, MySQL, HTML, CSS, JavaScript",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <span><strong>Technologies:</strong> {project.technologies}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;