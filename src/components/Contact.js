import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
    // Clear the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="container">
      <h2>Contact Me</h2>

      <p><strong>📍 Location:</strong> Coimbatore, Tamil Nadu</p>
      <p>
        <a href="mailto:honeypriyadharshini2004@gmail.com">
          honeypriyadharshini2004@gmail.com
        </a>
      </p>

      <div style={{ marginTop: "20px" }}>
        <p><strong>🔗 Connect:</strong></p>
        <a href="https://github.com/Honeyhpd" target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
        <a href="https://www.linkedin.com/in/honey-priya-dharshini-v-590372268" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
        <a href="https://www.instagram.com/honey.hpd" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>

      
    </section>
  );
}

export default Contact;
