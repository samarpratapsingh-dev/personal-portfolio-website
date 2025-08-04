import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(data).some((val) => !val.trim())) {
      alert("Please fill all fields");
      return;
    }
    alert("Message sent successfully! (Mock)");
    setData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          name="subject"
          placeholder="Subject"
          value={data.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={data.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Contact;
