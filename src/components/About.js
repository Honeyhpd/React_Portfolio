import React from "react";
import { FaBullseye, FaGraduationCap, FaPalette, FaQuoteLeft } from "react-icons/fa";

const aboutData = [
  {
    icon: <FaBullseye size={30} color="#ff6f61" />,
    title: "Career Goals",
    items: [
      "Serve in cybersecurity and digital investigation.",
      "Master ethical hacking & threat analysis.",
      "Build impactful software solutions.",
      "Craft intuitive and aesthetic UI designs.",
    ],
    bgColor: "bg-danger bg-opacity-10",
    borderColor: "border-danger",
  },
  {
    icon: <FaGraduationCap size={30} color="#6f42c1" />,
    title: "Education",
    items: [
      "B.Tech AI & Data Science – 3rd Year",
      "Anna University Regional Campus, Coimbatore",
      "Native: Kanyakumari",
    ],
    bgColor: "bg-primary bg-opacity-10",
    borderColor: "border-primary",
  },
  {
    icon: <FaPalette size={30} color="#0d6efd" />,
    title: "Hobbies",
    items: [
      "Designing aesthetics & layouts",
      "Learning about cybercrime cases",
      "Reading tech blogs & drawing",
      "Listening to music",
    ],
    bgColor: "bg-info bg-opacity-10",
    borderColor: "border-info",
  },
  {
    icon: <FaQuoteLeft size={40} color="#198754" />,
    title: "Motto",
    quote: "The fear of being average fuels my fire to become extraordinary!",
    bgColor: "bg-success bg-opacity-10",
    borderColor: "border-success",
  },
];

const About = () => {
  return (
    <section id="about" className="container py-5">
      <h2 className="text-center mb-5 fw-bold" style={{ letterSpacing: "2px" }}>
        About Me
      </h2>
      <p className="text-center mb-5 fs-5">
        I’m <strong>Honey Priya Dharshini V</strong>, passionate about{" "}
        <span className="text-danger">Cybersecurity</span>,{" "}
        <span className="text-primary">Software Development</span>, and{" "}
        <span className="text-info">UI/UX Design</span>. Currently pursuing B.Tech in
        Artificial Intelligence and Data Science at Coimbatore.
      </p>

      <div className="row g-4">
        {aboutData.map(({ icon, title, items, quote, bgColor, borderColor }, idx) => (
          <div key={idx} className="col-md-6 d-flex">
            <div
              className={`p-4 rounded shadow-sm border ${bgColor} ${borderColor} h-100 d-flex flex-column w-100`}
              style={{ minHeight: "280px" }}
            >
              <div className="d-flex align-items-center mb-3 gap-3">
                {icon}
                <h3 className="fw-semibold mb-0">{title}</h3>
              </div>
              {items ? (
                <ul className="list-unstyled flex-grow-1">
                  {items.map((item, i) => (
                    <li key={i} className="mb-2" style={{ fontSize: "1.1rem" }}>
                      • {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <blockquote className="blockquote fst-italic fs-5 flex-grow-1 d-flex align-items-center">
                  “{quote}”
                </blockquote>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
