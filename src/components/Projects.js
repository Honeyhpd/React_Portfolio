import React from "react";

function Projects() {
  return (
    <section id="projects" className="container">
      <h2>My Projects</h2>

      <details>
        <summary>🔒 Cybersecurity Projects</summary>

        <details className="sub-project">
          <summary>SSL/TLS Certificate Analyzer</summary>
          <p>
            A Cybersecurity tool for in-depth analysis of SSL/TLS certificates and web security configurations across websites.
          </p>
          <p><strong>Tech Used:</strong>Python, HTML, CSS, JavaScript</p>
          <a href="https://github.com/Honeyhpd/SSL-TLS" target="_blank" className="btn" rel="noopener noreferrer">GitHub</a>
        </details>

        <details className="sub-project">
          <summary>Phishing Website Detector</summary>
          <p>Tool to detect phishing URLs using ML model integrated with Flask.</p>
          <p><strong>Tech Used:</strong> Python, Flask, Machine Learning</p>
          <a href="https://github.com/your-phishing-detector" target="_blank" className="btn" rel="noopener noreferrer">GitHub</a>
        </details>
      </details>

      <details>
        <summary>🎨 UI/UX Projects</summary>

        <details className="sub-project">
          <summary>Health-care App UI Design</summary>
          <p>Modern interface for a Health-care app including wireframes, mockups, and user flows.</p>
          <p><strong>Tools Used:</strong> Figma, Canva</p>
          <a href="https://github.com/Honeyhpd/Health-Care" target="_blank" className="btn" rel="noopener noreferrer">GitHub</a>
        </details>

        <details className="sub-project">
          <summary>To-Do App Redesign</summary>
          <p>Minimalistic redesign of a productivity app focused on UX flow.</p>
          <p><strong>Tools Used:</strong> Figma, Notion</p>
          <a href="https://github.com/your-todo-redesign" target="_blank" className="btn" rel="noopener noreferrer">GitHub</a>
        </details>
      </details>

      <details>
        <summary>💻 Software Development Projects</summary>

        <details className="sub-project">
          <summary>Portfolio Website</summary>
          <p>Responsive personal portfolio website with resume and project sections.</p>
          <p><strong>Tech Used:</strong> HTML, CSS, JavaScript</p>
          <a href="https://github.com/Honeyhpd/Portfolio" target="_blank" className="btn" rel="noopener noreferrer">GitHub</a>
        </details>

        <details className="sub-project">
          <summary>Timetable Scheduler</summary>
          <p>An AI based Timetable scheduler for Optimized Timetable using Genetic Algorithm And CSP for Institutions.</p>
          <p><strong>Tech Used:</strong> HTML, CSS, JavaScript, Python</p>
          <a href="https://github.com/Honeyhpd/Timetable-Scheduler" target="_blank" className="btn" rel="noopener noreferrer">GitHub</a>
        </details>
      </details>
    </section>
  );
}

export default Projects;
