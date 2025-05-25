import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section container py-5" id="contact">
      <h2 className="section-title text-center mb-5">Get in Touch</h2>
      <div className="contact-content text-center">
        <p>
          I'm always open to new opportunities, collaborations, or simply connecting with like-minded professionals. 
  Feel free to reach out through any of the platforms below.
        </p>
        <div className="contact-icons mt-4">
          <a
            href="https://www.linkedin.com/in/honey-priya-dharshini-v-590372268/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon linkedin-icon"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Honeyhpd"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon github-icon"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/honey.hpd/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon instagram-icon"
            aria-label="Instagram Profile"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="contact-icon email-icon"
            aria-label="Send Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
