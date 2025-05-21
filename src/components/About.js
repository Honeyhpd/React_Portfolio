import React from "react";
import profilePic from './profile.jpg'; // Make sure profile.jpg is in your public or src folder

function About() {
  return (
    <section id="about" className="container">
      <div className="about-section">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm Honey Priya Dharshini V, a creative mind with a passion for Cybersecurity, Software Development,
            and UI/UX Design. I’m currently pursuing B.Tech in Artificial Intelligence and Data Science at Coimbatore.
            This space showcases my projects, ideas, and interests. Dive in to explore my digital journey 🚀💻✨🕵️‍♀️
          </p>
        </div>
      </div>

      <h2>Career Goals</h2>
      <ul>
        <li>To serve in the field of cybersecurity and digital investigation, combining my technical skills with a passion for protecting digital systems.</li>
        <li>I'm focused on mastering ethical hacking, threat analysis, and secure coding to build a safer digital world.</li>
        <li>I'm focusing on enhancing my skills in front-end and back-end technologies to develop impactful software solutions.</li>
        <li>I enjoy designing clean, intuitive user interfaces. I aim to craft meaningful and aesthetic user experiences that combine creativity with usability.</li>
      </ul>

      <h2>Education</h2>
      <ul>
        <li>B.Tech in Artificial Intelligence & Data Science – 3rd Year</li>
        <li>College: Anna University Regional Campus, Coimbatore</li>
        <li>Native: Kanyakumari</li>
      </ul>

      <h2>Hobbies</h2>
      <ul>
        <li>🎨 Designing aesthetics and layouts</li>
        <li>💡 Learning about cybercrime cases</li>
        <li>📚 Reading tech blogs and Drawing</li>
        <li>🎧 Listening to music</li>
      </ul>

      <section style={{ textAlign: "center", margin: "30px 0" }}>
        <p><em>“The fear of being average fuels my fire to become extraordinary!”</em></p>
      </section>
    </section>
  );
}

export default About;
