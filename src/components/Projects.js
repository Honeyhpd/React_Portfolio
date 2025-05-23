import React, { useState } from "react";

function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const projects = [
    {
      category: "Cybersecurity Projects",
      items: [
        {
          title: "SSL/TLS Certificate Analyzer",
          description:
            "A digital tool for analysis of SSL/TLS certificates and web security across websites.",
          tech: "Python, HTML, CSS, JavaScript",
          link: "https://github.com/Honeyhpd/SSL-TLS",
        },
        {
          title: "Phishing Website Detector",
          description:
            "Tool to detect phishing URLs using ML model integrated with Flask.",
          tech: "Python, Flask, Machine Learning",
          link: "https://github.com/your-phishing-detector",
        },
      ],
    },
    {
      category: "UI/UX Projects",
      items: [
        {
          title: "Health-care App UI Design",
          description:
            "Modern interface for a Health-care app including wireframes, mockups, and user flows.",
          tech: "Figma, Canva",
          link: "https://github.com/Honeyhpd/Health-Care",
        },
        {
          title: "To-Do App Redesign",
          description:
            "Minimalistic redesign of a productivity app focused on UX flow.",
          tech: "Figma, Notion",
          link: "https://github.com/your-todo-redesign",
        },
      ],
    },
    {
      category: "Software Development Projects",
      items: [
        {
          title: "Portfolio Website",
          description:
            "Responsive personal portfolio website with resume and project sections.",
          tech: "HTML, CSS, JavaScript",
          link: "https://github.com/Honeyhpd/Portfolio",
        },
        {
          title: "Timetable Scheduler",
          description:
            "An AI based Timetable scheduler using Genetic Algorithm And CSP for Institutions.",
          tech: "HTML, CSS, JavaScript, Python",
          link: "https://github.com/Honeyhpd/Timetable-Scheduler",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="container">
      <h2>My Projects</h2>
      {projects.map((group, groupIdx) => (
        <div key={group.category} className="project-group">
          <h3>{group.category}</h3>
          <div className="project-grid">
            {group.items.map((proj, idx) => {
              const currentIndex = `${groupIdx}-${idx}`;
              const isOpen = openIndex === currentIndex;
              return (
                <div key={proj.title} className="project-card">
                  <h4>{proj.title}</h4>
                  <button onClick={() => toggleDetails(currentIndex)}>
                    {isOpen ? "Hide Details" : "More Details"}
                  </button>
                  {isOpen && (
                    <div className="project-details">
                      <p>{proj.description}</p>
                      <p>
                        <strong>Tech Used:</strong> {proj.tech}
                      </p>
                      <a
                        href={proj.link}
                        target="_blank"
                        className="btn"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;