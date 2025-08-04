import React from "react";
import "../styles/about.css";

const About = () => (
  <section className="about">
    <h2>About Me</h2>

    <div className="about-section">
      <h3>💼 Work Experience</h3>
      <ul>
        <li>
          <strong>Full Stack Web Development Intern</strong>
          <br />
          Unified Mentor Pvt. Ltd, Gurugram
          <br />
          Feb 2025 – Present
        </li>
        <li>
          <strong>Associate - Recruitment</strong>
          <br />
          ACS Global Tech Solutions Pvt. Ltd, Noida
          <br />
          Sep 2022 – Jul 2023
          <br />
          Worked with clients like KPMG, Hexaware, Amdocs
        </li>
        <li>
          <strong>Trainee - Recruitment</strong>
          <br />
          ACS Global Tech Solutions Pvt. Ltd, Noida
          <br />
          Feb 2022 – Aug 2022
        </li>
      </ul>
    </div>

    <div className="about-section">
      <h3>🎓 Education</h3>
      <ul className="education-list">
        <li>
          <strong>
            Bachelor of Technology – Computer Science & Engineering
          </strong>
          <br />
          Ajay Kumar Garg Engineering College, Ghaziabad
          <br />
          <span className="year">2022</span>
        </li>
        <li>
          <strong>Diploma – Computer Science & Engineering</strong>
          <br />
          Subharti Institute of Technology & Engineering, Meerut
          <br />
          <span className="year">2019</span>
        </li>
        <li>
          <strong>High School – Secondary Education</strong>
          <br />
          St. Teresa's Academy, Modinagar
          <br />
          <span className="year">2014</span>
        </li>
      </ul>
    </div>

<div className="about-section">
  <h3>📜 Certifications</h3>
  <ul className="cert-list">
    <li>
      <strong>The Complete JavaScript Course 2024: From Zero to Expert!</strong><br />
      Udemy
    </li>
  </ul>
</div>

    <div className="about-section">
      <h3>🎯 Hobbies & Interests</h3>
      <div className="hobbies-grid">
        <div className="hobby-card">👨‍💻 Coding</div>
        <div className="hobby-card">💻 Web Technologies</div>
        <div className="hobby-card">🧩 Full Stack Projects</div>
        <div className="hobby-card">🔧 Debugging</div>
        <div className="hobby-card">📘 Tech Blogs</div>
        <div className="hobby-card">🏃‍♂️ Running</div>
        <div className="hobby-card">🏋️ Strength Training</div>
        <div className="hobby-card">📺 Anime Series</div>
      </div>
    </div>
  </section>
);

export default About;
