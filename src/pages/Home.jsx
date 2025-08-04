import React from "react";
import "../styles/home.css";
import profilePic from "../assets/profile.jpg";

const Home = () => (
  <section className="home">
    <img src={profilePic} alt="Profile" className="profile-pic" />
    <h2>Hello, I'm Samar Pratap Singh</h2>
    <p>
      A passionate and curious Full Stack Web Developer with a focus on building
      scalable and responsive Web Applications using the MERN Stack (MongoDB,
      Express.js, React.js, Node.js). I enjoy turning ideas into reality using
      clean Code and modern design practices. From designing intuitive UIs to
      setting up efficient Backends, I love every stage of the Development
      Cycle.
    </p>
  </section>
);

export default Home;
