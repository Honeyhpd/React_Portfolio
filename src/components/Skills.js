import React from "react";
import "./section.css";
import "./Skills.css";
import {
  FaCode,
  FaShieldAlt,
  FaPaintBrush,
  FaReact,
  FaNodeJs,
  FaPython,
  FaFigma,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

const focusAreas = [
  { icon: <FaCode />, label: "Software Development", labelColor: "#0d6efd" },
  { icon: <FaShieldAlt />, label: "Cybersecurity", labelColor: "#dc3545" },
  { icon: <FaPaintBrush />, label: "UI/UX Design", labelColor: "#fd7e14" },
];

const techSkills = [
  { icon: <FaReact color="#61DBFB" />, label: "React.js" },
  { icon: <FaNodeJs color="#3C873A" />, label: "Node.js" },
  { icon: <FaPython color="#3776AB" />, label: "Python" },
  { icon: <FaDatabase color="#6c757d" />, label: "MongoDB" },
  { icon: <FaFigma color="#F24E1E" />, label: "Figma" },
  { icon: <FaPaintBrush color="#00c4cc" />, label: "Canva" },
  { icon: <FaHtml5 color="#e34c26" />, label: "HTML5" },
  { icon: <FaCss3Alt color="#264de4" />, label: "CSS3" },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <div className="container text-center">
        <h2 className="section-title mb-4">My Focus Areas</h2>
        <div className="row justify-content-center g-4">
          {focusAreas.map((area, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div
                className={`card shadow-sm border-0 h-100 rounded-4 p-4 focus-card ${area.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="display-4 mb-3">{area.icon}</div>
                <h5 className="focus-label mt-3" style={{ color: area.labelColor }}>
                  {area.label}
                </h5>
              </div>
            </div>
          ))}
        </div>

        <h3 className="section-title mt-5 mb-4">Tech Skills</h3>
        <div className="row justify-content-center g-4">
          {techSkills.map((skill, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2">
              <div className="skill-icon d-flex flex-column align-items-center">
                <div className="display-5 mb-2">{skill.icon}</div>
                <span>{skill.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
