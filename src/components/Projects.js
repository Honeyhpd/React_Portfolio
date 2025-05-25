import React, { useState } from "react";
import "./section.css";
import "./Projects.css";
import { FaCode, FaShieldAlt, FaPaintBrush, FaGithub } from "react-icons/fa";

const projectsData = [
  {
    icon: <FaShieldAlt size={30} color="#198754" />,
    title: "SSL/TLS Certificate Analyzer",
    description: "Tool for analyzing SSL/TLS certificates and web security.",
    tech: ["Python", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/Honeyhpd/SSL-TLS",
    category: "Cybersecurity",
    image: "/images/ssl-analyzer.png",
  },
  {
    icon: <FaShieldAlt size={30} color="#198754" />,
    title: "Phishing Website Detector",
    description: "Detects phishing URLs using ML integrated with Flask.",
    tech: ["Python", "Flask", "Machine Learning"],
    link: "https://github.com/Honeyhpd/Phishing-Detector",
    category: "Cybersecurity",
    image: "/images/phishing-detector.jpg",
  },
  {
    icon: <FaPaintBrush size={30} color="#6f42c1" />,
    title: "Health-care App UI",
    description: "Modern UI design with wireframes and mockups.",
    tech: ["Figma", "Canva"],
    link: "https://github.com/Honeyhpd/Health-Care",
    category: "UI/UX",
    image: "/images/health-ui.jpeg",
  },
  {
    icon: <FaPaintBrush size={30} color="#6f42c1" />,
    title: "To-Do App Redesign",
    description: "Redesign of a productivity app focused on UX flow.",
    tech: ["Figma", "Notion"],
    link: "https://github.com/Honeyhpd/JS_Projects",
    category: "UI/UX",
    image: "/images/todo.jpg",
  },
  {
    icon: <FaCode size={30} color="#fd7e14" />,
    title: "Portfolio Website",
    description: "Responsive personal website with resume and projects.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Honeyhpd/Portfolio",
    category: "Software Development",
    image: "/images/portfolio.png",
  },
  {
    icon: <FaCode size={30} color="#fd7e14" />,
    title: "Timetable Scheduler",
    description: "AI-based scheduler using Genetic Algorithm & Constraint Satisfaction.",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    link: "https://github.com/Honeyhpd/Timetable-Scheduler",
    category: "Software Development",
    image: "/images/timetable.png",
  },
];

const Projects = () => {
  const [flipped, setFlipped] = useState(null);

  const toggleFlip = (index) => {
    setFlipped(index === flipped ? null : index);
  };

  return (
    <section id="projects" className="section-container">
      <div className="container">
        <h2 className="section-title text-center mb-5">My Projects</h2>
        <div className="row justify-content-center">
          {projectsData.map((proj, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className={`flip-card ${flipped === index ? "flipped" : ""}`}>
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front">
                    <img src={proj.image} alt={proj.title} className="project-img-top" />
                    <div className="p-3">
                      <div className="d-flex align-items-center mb-2">
                        {proj.icon}
                        <h5 className="ms-2 mb-0">{proj.title}</h5>
                      </div>
                      <p className="text-muted">{proj.category}</p>
                      <button
                        className="btn btn-outline-primary btn-sm mt-2"
                        onClick={() => toggleFlip(index)}
                      >
                        Detail
                      </button>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="flip-card-back">
                    <div className="p-3">
                      <h5>{proj.title}</h5>
                      <p>{proj.description}</p>
                      <div className="mb-2">
                        {proj.tech.map((tech, i) => (
                          <span key={i} className="badge bg-light text-dark me-2 mb-1">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-dark mt-2"
                      >
                        <FaGithub className="me-1" />
                        View on GitHub
                      </a>
                      <button
                        className="btn btn-outline-light btn-sm mt-2 d-block"
                        onClick={() => toggleFlip(index)}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
